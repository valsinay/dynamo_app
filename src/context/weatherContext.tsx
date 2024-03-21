import React, { createContext, useState, useContext } from "react";
import {
  Forecast,
  Unit,
  WeatherProvider as WeatherProviderProps,
} from "../interfaces/IWeather";
import { useFetchWeatherData } from "../hooks/useWeatherData";
interface WeatherContextProps {
  data: Forecast;
  loading: boolean;
  unit: Unit;
  setUnit: (unit: Unit) => void;
  showModal: boolean;
  toggleModal: (showModal: boolean) => void;
}
const WeatherContext = createContext({} as WeatherContextProps);

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [showModal, toggleModal] = useState(false);
  const [unit, setUnit] = useState<Unit>(() => {
    const storedUnit = localStorage.getItem("unit");
    return storedUnit ? JSON.parse(storedUnit) : "metric";
  });

  const { data, loading } = useFetchWeatherData(unit);

  return (
    <WeatherContext.Provider
      value={{
        data,
        loading,
        unit,
        setUnit,
        showModal,
        toggleModal,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
