import { useEffect, useState } from "react";

import { WeatherData } from "../types";

const useCityManager = (
  weatherData: WeatherData | null,
  city: string,
  setCity: (value: string) => void,
) => {
  const [cities, setCities] = useState<{ weatherData: WeatherData }[]>([]);

  // Add city to the list/array - check the length of the list, remove the last city if it exceeds 5
  const addCity = (weatherData: WeatherData) => {
    setCities((prevCities) => {
      const newCities = [{ weatherData }, ...prevCities];
      if (newCities.length > 5) {
        newCities.pop();
      }
      return newCities;
    });
    setCity("");
  };

  useEffect(() => {
    if (weatherData && city) {
      addCity(weatherData);
    }
  }, [weatherData]);

  return { cities };
};

export default useCityManager;
