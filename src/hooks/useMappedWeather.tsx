import { useState, useEffect } from "react";
import { CardData, Weather, WeatherData } from "../models/models";

// interface WeatherData {
//     dt_txt: string;
//     main: {
//       temp_max: number;
//       temp_min: number;
//       temp: number;
//     };
//     weather: Array<Weather>;
// }

// interface CardData {
//   data: WeatherData;
//   description: string;
//   date: string;
//   overallConditions: string;
//   weather: WeatherData[];
// }

export const useMappedWeather = (data: { list: WeatherData[] } ) => {
  const [weatherGroupedByDays, setWeatherGroupedByDays] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        const newWeatherGroupedByDays: CardData[] = [];

        data.list.map((forecast: WeatherData) =>{
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
        })

        setWeatherGroupedByDays(newWeatherGroupedByDays.slice(0, 5));
      }
    };

    fetchData();
  }, [data]);

  return weatherGroupedByDays;
};