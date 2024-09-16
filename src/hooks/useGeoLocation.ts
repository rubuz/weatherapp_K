import { useEffect, useState } from "react";
import { WeatherData } from "../types";

const useGeoLocation = () => {
  const [currentLocationWeather, setCurrentLocationWeather] =
    useState<WeatherData | null>(null);
  const [errorGeo, setErrorGeo] = useState<Error | null>(null);

  useEffect(() => {
    const fetchWeatherForLocation = async (
      latitude: number,
      longitude: number,
    ) => {
      try {
        const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_OPENWEATHER_API
        }&units=metric`;
        const response = await fetch(weather_url);
        const data = await response.json();

        if (data.cod !== 200) {
          throw new Error(data.message);
        }

        const { temp, feels_like, humidity, temp_max, temp_min } = data.main;
        const name = data.name;
        const icon = data.weather[0].icon;

        const weatherData: WeatherData = {
          temp,
          feels_like,
          humidity,
          temp_max,
          temp_min,
          name,
          icon,
        };

        setCurrentLocationWeather(weatherData);
      } catch (error) {
        setErrorGeo(
          error instanceof Error
            ? error
            : new Error("An error with current location occurred"),
        );
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherForLocation(latitude, longitude);
        },
        (error) => {
          setErrorGeo(new Error(error.message));
        },
      );
    } else {
      setErrorGeo(new Error("Geolocation is not supported by this browser"));
    }
  }, []);

  return { currentLocationWeather, errorGeo };
};

export default useGeoLocation;
