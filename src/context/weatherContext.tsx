import React, { createContext, useState, useContext } from "react";
import {
  Unit,
  WeatherContextProps,
  WeatherProvider as WeatherProviderProps,
} from "../models/models";
import { useFetchWeatherData } from "../hooks/useWeatherData";

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
