import React from "react";
import { StyledP, StyledH2, StyledDiv } from "./Card.styles";
import { WeatherData } from "../../interfaces/IWeather";
import { useWeatherContext } from "../../context/weatherContext";
import { checkWeatherIcon } from "../../helpers/getIcon";

export const HourCard = ({
  dt_txt: dateTimeText,
  main,
  weather,
}: WeatherData) => {
  const { unit } = useWeatherContext();
  const checkUnit = unit === "metric" ? "C" : "F";
  const overallConditions = weather[0].main;
  const weatherIcon = checkWeatherIcon(overallConditions);

  const date = new Date(dateTimeText);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  const temperatureDisplay = parseInt(main.temp.toString());

  return (
    <StyledDiv>
      <StyledH2 $margin="0 0 1rem">{formattedTime}</StyledH2>
      {weatherIcon}
      <StyledP $degrees>
        {temperatureDisplay} °{checkUnit}
      </StyledP>
    </StyledDiv>
  );
};
