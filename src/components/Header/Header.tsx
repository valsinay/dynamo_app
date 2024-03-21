import React from "react";
import { City, Unit } from "../../interfaces/IWeather";
import {  StyledDiv } from "./Header.styles";
import { theme } from "../../theme/theme";
import { H1 ,StyledButton} from "../shared/SharedStyles.styles";

interface HeaderProps {
  city: City;
  unit: Unit;
  setUnit: (unit: Unit) => void;
}

export const Header = ({ city, unit, setUnit }: HeaderProps) => {
  return (
    <StyledDiv $container>
      <H1 $color={theme.main.black} data-testid="header">
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
