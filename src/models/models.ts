import { ReactNode } from "react";

export type Unit = "metric" | "imperial";

export interface WeatherContextProps {
  data: Forecast ;
  loading: boolean;
  unit: Unit;
  setUnit: (unit: Unit) => void;
  showModal: boolean;
  toggleModal: (showModal: boolean) => void;
}

export interface WeatherProvider {
  children: ReactNode;
}

export interface HeaderProps {
  city: City
  unit: Unit;
  setUnit: (unit: Unit) => void;
}



export interface City {
  country: string;
  name: string;
  coord?: {
    lat: number;
    lon: number;
  };
}
export interface Forecast {
  city: City;
  list: Array<WeatherData>;
}

export interface WeatherData {
  dt_txt: string;
  main: {
    temp_max: number;
    temp_min: number;
    temp: number;
  };
  weather: Array<Weather>;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
}

export interface CardData {
  data: WeatherData;
  date: string;
  overallConditions: string;
  description: string;
  weather: Array<WeatherData>;
}
