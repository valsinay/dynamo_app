import { WeatherData } from "./IWeather";

export interface CardData {
    data: WeatherData;
    date: string;
    overallConditions: string;
    description: string;
    weather: Array<WeatherData>;
  }