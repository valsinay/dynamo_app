import React from "react";
import { StyledP, ButtonWrapper } from "./Card.styles";
import { CardData } from "../../interfaces/ICardData";
import { useWeatherContext } from "../../context/weatherContext";
import { checkWeatherIcon } from "../../helpers/getIcon";
import { StyledH2 } from "../shared/SharedStyles.styles";

 export interface DayCardProps {
  forecast: CardData;
  onClick: () => void;
}

export const DayCard = ({ forecast, onClick }: DayCardProps) => {
  const { unit } = useWeatherContext();

  const { dt_txt: dateTimeText } = forecast.data;
  const { description, date, overallConditions } = forecast;
  const checkUnit = unit === "metric" ? "C" : "F";
  const WeatherIcon = checkWeatherIcon(overallConditions);

  const checkDateIsToday =
    new Date(dateTimeText).toDateString() === new Date().toDateString();

  const highestTemp = forecast.weather.map(
    (el: { main: { temp_max: number } }) => {
      return Math.max(el.main.temp_max);
    }
  );

  const lowestTemp = forecast.weather.map(
    (el: { main: { temp_min: number } }) => {
      return el.main.temp_min;
    }
  );

  const temperatureDisplay = `${parseInt(
    Math.max(...highestTemp).toString()
  )} °${checkUnit} | ${parseInt(
    Math.min(...lowestTemp).toString()
  )} °${checkUnit}`;

  return (
    <ButtonWrapper $dayCard onClick={onClick} data-testid="dayCard">
      <StyledH2 $margin="1rem 0">{checkDateIsToday ? "Today" : date}</StyledH2>
      {WeatherIcon}
      <StyledP>{description}</StyledP>
      <StyledP $degrees>{temperatureDisplay}</StyledP>
    </ButtonWrapper>
  );
};
