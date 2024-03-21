import { DayCardProps } from "../../src/components/Card/DayCard";
import {
  isPermissionAllowed,
  isPermissionBlocked,
  isPermissionAsk,
} from "cypress-browser-permissions";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad({ navigator }) {
        // Plovdiv city
        const latitude = 42.1354;
        const longitude = 24.7453;
        cy.stub(navigator.geolocation, "getCurrentPosition").callsArgWith(0, {
          coords: { latitude, longitude },
        });
      },
    });
  });

  it.skip("should show an alert and loader when geolocation is disabled", () => {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(win) {
        cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake(
          (successCallback, errorCallback) => {
            const error = new Error("Please enable your geolocation");
            alert(error); 
            errorCallback(error);
          }
        );
      },
    });

    cy.get("[data-testid='loader']").should("be.visible");

    const stub = cy.stub();
    cy.on("window:alert", stub);
    cy.window().then(() => {
      expect(stub.getCall(0)).to.be.calledWith(
        "Please enable your geolocation"
      );
    });
  });

  it("should initially display a loader and then display 5 cards", () => {
    cy.get("[data-testid='loader']").should("be.visible");
    cy.wait(5000);

    cy.get("[data-testid='header']").should(
      "have.text",
      "5-Day Weather Forecast, Plovdiv, BG"
    );

    cy.get("[data-testid='loader']").should("not.exist");
    cy.get("[data-testid='cardsWrapper']")
      .find("[data-testid='dayCard']")
      .should("have.length", 5);
  });

  it("should display the modal when a card is clicked", () => {
    cy.get("[data-testid='loader']").should("be.visible");
    cy.wait(5000);

    cy.get("[data-testid='cardsWrapper']")
      .find("[data-testid='dayCard']")
      .first()
      .click();

    cy.get(".customModal").should("be.visible");
  });

  it("should close the modal when the close button is clicked", () => {
    cy.get("[data-testid='loader']").should("be.visible");
    cy.wait(5000);

    cy.get("[data-testid='cardsWrapper']")
      .find("[data-testid='dayCard']")
      .first()
      .click();

    cy.get(".customModal").should("be.visible");
    cy.get(".customModal").find("button").click();
    cy.get(".customModal").should("not.exist");
  });

  it("should change the temperature measuring unit and display it properly in the card", () => {
    cy.get("[data-testid='loader']").should("be.visible");
    cy.wait(5000);

    cy.get("[data-testid='loader']").should("not.exist");
    cy.get("[data-testid='cardsWrapper']")
      .find("[data-testid='dayCard']")
      .should("have.length", 5);

    cy.get("[data-testid='headerButtons']").find("button").last().click();
    cy.get("[data-testid='headerButtons']")
      .find("button")
      .last()
      .should("be.disabled");

    cy.get("[data-testid='cardsWrapper']")
      .find("[data-testid='dayCard']")
      .first()
      .find("p")
      .should("contain", "°F");

    cy.get("[data-testid='headerButtons']").find("button").first().click();
    cy.get("[data-testid='headerButtons']")
      .find("button")
      .first()
      .should("be.disabled");

    cy.get("[data-testid='cardsWrapper']")
      .find("[data-testid='dayCard']")
      .first()
      .find("p")
      .should("contain", "°C");
  });

  it.skip("should display the correct weather icon", () => {
    cy.fixture("weather.json").then((day: DayCardProps) => {
      expect(day.forecast.data.dt_txt).to.eq("Today");
    });

    cy.wait(5000);
    cy.get("[data-testid='dayCard']").should("contain", "Today");
  });
});
