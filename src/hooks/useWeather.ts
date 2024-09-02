import { useState, useEffect } from "react";

interface WeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

const useWeather = (city: string) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_OPENWEATHER_API
      }&units=metric`;

      try {
        const response = await fetch(weather_url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const { temp, feels_like, temp_max, temp_min, humidity } = data.main;
        setWeatherData({ temp, feels_like, temp_max, temp_min, humidity });
      } catch (error) {
        setError(error as Error);
      }
    };

    fetchWeather();
  }, [city]);

  return { weatherData, error };
};

export default useWeather;
