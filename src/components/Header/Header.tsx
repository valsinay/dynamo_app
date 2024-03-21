import React from "react";
import { City, Unit } from "../../interfaces/IWeather";
import { H1, StyledButton, StyledDiv } from "./Header.styles";

interface HeaderProps {
  city: City;
  unit: Unit;
  setUnit: (unit: Unit) => void;
}

export const Header = ({ city, unit, setUnit }: HeaderProps) => {
  return (
    <StyledDiv $container>
      <H1 data-testid="header">
        5-Day Weather Forecast, {city.name}, {city.country}
      </H1>
      <StyledDiv $switch $margin="1rem" data-testid="headerButtons">
        <StyledButton
          onClick={() => setUnit("metric")}
          disabled={unit === "metric"}
        >
          °C
        </StyledButton>
        <StyledButton
          onClick={() => setUnit("imperial")}
          disabled={unit === "imperial"}
        >
          °F
        </StyledButton>
      </StyledDiv>
    </StyledDiv>
  );
};
