import { useState } from "react";

import CityCard from "./components/CityCard";
import SearchBar from "./components/SearchBar";

import useCityManager from "./hooks/useCityManager";
import useWeather from "./hooks/useWeather";

function App() {
  const [city, setCity] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [emptyError, setEmptyError] = useState(false);

  const { weatherData, error } = useWeather(city);
  const { cities } = useCityManager(weatherData, city, setCity);

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
      <h1 className="text-center font-bold my-4 text-3xl">Weather APP</h1>
      <div className="w-[95%] sm:w-[450px] p-4 rounded-3xl shadow-md flex flex-col justify-center items-center mx-auto bg-light-violet my-4 ">
        <SearchBar
          inputValue={inputValue}
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
          handleSearch={handleSearch}
          setInputValue={setInputValue}
          error={error}
          emptyError={emptyError}
        />
        <div className="w-full">
          {cities.map((city, index) => (
            <div className="rounded-lg bg-violet first-of-type:rounded-t-2xl first-of-type:mt-4 last-of-type:rounded-b-2xl last-of-type:mb-0 mb-1 shadow-md hover:cursor-pointer hover:scale-[101%] hover:ring-2 hover:ring-white2 transition-all duration-100 active:scale-95">
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
