export interface WeatherData {
  name: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  icon: string;
}

export interface currentLocationWeather {
  currentLocationWeather: WeatherData | null;
  errorGeo: Error | null;
}

export interface CityCardProps {
  currentLocationWeather?: WeatherData | null;
  weatherData: WeatherData;
  onClick: (cityName: string) => void;
}

export interface SearchBarProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  setInputValue: (value: string) => void;
  error: Error | null;
  emptyError: boolean;
}
