import React from "react";
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
} from "react-icons/io";
import { BsCloudHaze2Fill, BsCloudDrizzleFill } from "react-icons/bs";
import { theme } from "../theme/theme";

export const checkWeatherIcon = (weatherDescription: string) => {
    let IconComponent: JSX.Element;
  
    switch (weatherDescription) {
      case "Clouds":
        IconComponent = <IoMdCloudy color={theme.weather.cloudy}/>;
        break;
      case "Haze":
        IconComponent = <BsCloudHaze2Fill color={theme.weather.cloudy} />;
        break;
      case "Rain":
        IconComponent = <IoMdRainy color={theme.weather.rainy} />;
        break;
      case "Clear":
        IconComponent = <IoMdSunny color={theme.weather.clear} />;
        break;
      case "Drizzle":
        IconComponent = <BsCloudDrizzleFill color={theme.weather.rainy} />;
        break;
      case "Snow":
        IconComponent = <IoMdSnow color={theme.weather.rainy} />;
        break;
      case "Thunderstorm":
        IconComponent = <IoMdThunderstorm color={theme.weather.thunderstorm} />;
        break;
      default:
        IconComponent = <IoMdSunny color={theme.weather.clear} />;
        break;
    }
  
    return IconComponent;
  };
