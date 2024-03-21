import { useState, useEffect } from "react";
import { CardData, WeatherData } from "../interfaces/index";
import { useWeatherContext } from "../context/weatherContext";

export const useMappedWeather = () => {
  const { data } = useWeatherContext();
  const [weatherGroupedByDays, setWeatherGroupedByDays] = useState<CardData[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      if (data && data.list) {
        const newWeatherGroupedByDays: CardData[] = [];

        data.list.forEach((forecast: WeatherData) => {
          const currDate = new Date(forecast.dt_txt).toLocaleString("en-GB", {
            weekday: "long",
          });

          const existingDate = newWeatherGroupedByDays.find(
            (day) => day.date.toLocaleString() === currDate.toLocaleString()
          );

          if (existingDate) {
            existingDate.weather.push(forecast);
          } else {
            newWeatherGroupedByDays.push({
              data: forecast,
              description: forecast.weather[0].description,
              date: currDate,
              overallConditions: forecast.weather[0].main,
              weather: [forecast],
            });
          }
        });

        setWeatherGroupedByDays(newWeatherGroupedByDays.slice(0, 5));
      }
    };

    fetchData();
  }, [data]);

  return weatherGroupedByDays;
};
