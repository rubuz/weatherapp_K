import { useState, useEffect } from "react";
import { WeatherData } from "../types";

const useWeather = (city: string) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_OPENWEATHER_API
      }&units=metric`;

      try {
        const response = await fetch(weather_url);
        const data = await response.json();

        if (data.cod !== 200) {
          throw new Error(data.message);
        }

        const { temp, feels_like, temp_max, temp_min, humidity } = data.main;
        const name = data.name;
        const icon = data.weather[0].icon;
        setWeatherData({
          temp,
          feels_like,
          temp_max,
          temp_min,
          humidity,
          name,
          icon,
        });
      } catch (error) {
        setWeatherData(null);
        setError(
          error instanceof Error
            ? error
            : new Error("An unknown error occurred")
        );
        console.log("gre cez error");
      }
    };

    fetchWeather();
  }, [city]);

  return { weatherData, error };
};

export default useWeather;
