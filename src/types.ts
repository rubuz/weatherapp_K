export interface WeatherData {
  name: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  icon: string;
}

export interface CityCardProps {
  weatherData: WeatherData;
  onClick: (cityName: string) => void;
}
