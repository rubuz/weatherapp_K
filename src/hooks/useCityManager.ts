import { useEffect, useState } from "react";

import { WeatherData } from "../types";

const useCityManager = (
  weatherData: WeatherData | null,
  city: string,
  setCity: (value: string) => void,
) => {
  const [cities, setCities] = useState<{ weatherData: WeatherData }[]>(() => {
    // Intialize state fron local storage
    const savedCities = localStorage.getItem("cityHistory");
    return savedCities ? JSON.parse(savedCities) : [];
  });

  // Add city to the list/array - check the length of the list, remove the last city if it exceeds 5
  const addCity = (weatherData: WeatherData) => {
    setCities((prevCities) => {
      const cityIndex = prevCities.findIndex(
        (city) => city.weatherData.name === weatherData.name,
      );

      let newCities;
      if (cityIndex !== -1) {
        //Update existing city
        newCities = [...prevCities];
        newCities[cityIndex] = { weatherData };
      } else {
        // Add new city
        newCities = [{ weatherData }, ...prevCities];
        if (newCities.length > 5) {
          newCities.pop();
        }
      }

      // Save to local storage
      localStorage.setItem("cityHistory", JSON.stringify(newCities));
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
