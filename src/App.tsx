import { useState } from "react";

import CityCard from "./components/CityCard";
import SearchBar from "./components/SearchBar";

import useCityManager from "./hooks/useCityManager";
import useWeather from "./hooks/useWeather";

function App() {
  const [city, setCity] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [emptyError, setEmptyError] = useState<boolean>(false);

  const { weatherData, error } = useWeather(city);
  const { cities } = useCityManager(weatherData, city, setCity);

  // HZANDLER FUNCTIONS
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmptyError(false);
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue === "") {
      setEmptyError(true);
    } else {
      setCity(inputValue);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleCityClick = (cityName: string) => {
    setCity(cityName);
    setInputValue(cityName);
  };

  return (
    <>
      <h1 className="my-4 text-center text-3xl font-bold">Weather APP</h1>
      <div className="mx-auto my-4 flex w-[95%] flex-col items-center justify-center rounded-3xl bg-light-violet p-4 shadow-md sm:w-[450px]">
        <SearchBar
          inputValue={inputValue}
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
          handleSearch={handleSearch}
          setInputValue={setInputValue}
          error={error}
          emptyError={emptyError}
        />

        {/* CARD LIST */}
        <div className="w-full">
          {cities.map((city, index) => (
            <div className="mb-1 rounded-lg bg-violet shadow-md transition-all duration-100 first-of-type:mt-4 first-of-type:rounded-t-2xl last-of-type:mb-0 last-of-type:rounded-b-2xl hover:cursor-pointer active:scale-95 sm:hover:scale-[102%]">
              <CityCard
                key={index}
                weatherData={city.weatherData}
                onClick={handleCityClick}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
