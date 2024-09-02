import { useState } from "react";
import useWeather from "./hooks/useWeather";

function App() {
  const [city, setCity] = useState("Ljubljana");
  const [inputValue, setInputValue] = useState("");
  const { weatherData, error } = useWeather(city);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCity(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="city"
          className="border-2 border-black"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        {error ? <p>Error: {error.message}</p> : null}
        {weatherData && (
          <div>
            <p>Temperature: {weatherData.temp}°C</p>
            <p>Feels like: {weatherData.feels_like}°C</p>
            <p>Max Temperature: {weatherData.temp_max}°C</p>
            <p>Min Temperature: {weatherData.temp_min}°C</p>
            <p>Humidity: {weatherData.humidity}%</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
