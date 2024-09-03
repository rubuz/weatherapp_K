import { useEffect, useState } from "react";
import useWeather from "./hooks/useWeather";
import { WeatherData } from "./types";
import CityCard from "./components/CityCard";
import { IoSearch } from "react-icons/io5";

function App() {
  const [city, setCity] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [cities, setCities] = useState<{ weatherData: WeatherData }[]>([]);

  const [emptyError, setEmptyError] = useState(false);

  const { weatherData, error } = useWeather(city);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmptyError(false);
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputValue === "") {
        setEmptyError(true);
        return;
      }
      setCity(inputValue);
    }
  };

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

  const handleCityClick = (cityName: string) => {
    setCity(cityName);
    setInputValue(cityName);
  };

  useEffect(() => {
    if (weatherData && city) {
      addCity(weatherData);
    }
  }, [weatherData]);

  return (
    <>
      <div className="place-content-center w-full h-[100dvh] bg-white2 font-open-sans">
        <div className=" max-w-[20%] p-4 rounded-3xl shadow-md flex flex-col justify-center items-center mx-auto bg-light-violet ">
          <div className="w-full flex items-center justify-between gap-2 relative">
            <input
              type="text"
              name="city"
              className="rounded-full w-full h-10 px-4 text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-apricot shadow-sm"
              value={inputValue}
              onChange={handleChange}
              onKeyDown={handleKeyPress}
              onClick={() => setInputValue("")}
            />
            <IoSearch className="absolute z-10 right-0 h-10 w-10 bg-transparent p-2 rounded-full hover:text-violet transition-all duration-100 hover:cursor-pointer" />
          </div>
          {emptyError ? (
            <p>Error: Filed must not be empty</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : null}
          <div className="w-full">
            {cities.map((city, index) => (
              <div className="rounded-lg bg-violet first-of-type:rounded-t-2xl first-of-type:mt-4 last-of-type:rounded-b-2xl last-of-type:mb-0 mb-1 shadow-md hover:cursor-pointer hover:scale-[101%] hover:ring-2 hover:ring-white2 transition-all duration-100">
                <CityCard
                  key={index}
                  weatherData={city.weatherData}
                  onClick={handleCityClick}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
