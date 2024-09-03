import { useEffect, useState } from "react";
import useWeather from "./hooks/useWeather";
import { WeatherData } from "./types";
import CityCard from "./components/CityCard";
import { IoSearch } from "react-icons/io5";
import SearchBar from "./components/SearchBar";

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
