import { useState, useEffect } from "react";
import { Forecast, Unit } from "../models/models";
import { useLocation } from "./useLocation";

export const useFetchWeatherData = (unit: Unit) => {
  const [data, setData] = useState<Forecast>({} as Forecast);
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (location) {
        const URL = `${process.env.REACT_APP_API_URL}?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=${unit}&appid=${process.env.REACT_APP_API_KEY}`;
        setLoading(true);
        try {
          const response = await fetch(URL);
          const data = await response.json();
          setData(data);
          setLoading(false);
        } catch (error) {
          alert(error);
          setLoading(false);
        }
      }
      localStorage.setItem("unit", JSON.stringify(unit));
    };

    fetchWeatherData();
  }, [location, unit]);

  return { data, location, loading };
};
