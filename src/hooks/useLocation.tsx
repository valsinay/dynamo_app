import { useState, useEffect } from "react";
import { getCurrentLocation } from "../helpers/getLocation";

export const useLocation = () => {
  const [location, setLocation] = useState<GeolocationPosition | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const location = await getCurrentLocation();
        setLocation(location);
      } catch (error) {
        alert(error);
      }
    };

    fetchLocation();
  }, []);

  return location;
};
