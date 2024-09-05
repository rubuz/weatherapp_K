import { CityCardProps } from "../types";

const CityCard = ({ weatherData, onClick }: CityCardProps) => {
  // SOURCE FOR ICONS
  const iconURl = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;

  return (
    <div
      className="bg-transparent p-4 text-white"
      onClick={() => onClick(weatherData.name)}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-5xl font-bold">{Math.round(weatherData.temp)}°C</p>
          <p className="text-lg">{weatherData.name}</p>
        </div>
        <img src={iconURl} alt="weather icon" />
      </div>
      <div className="flex justify-between">
        <div className="weather-info-mini">
          <p className="weather-info-mini-number">
            {Math.round(weatherData.temp_min)}°C
          </p>
          <p className="weather-info-mini-text">Min</p>
        </div>
        <div className="weather-info-mini">
          <p className="weather-info-mini-number">
            {Math.round(weatherData.temp_max)}°C
          </p>
          <p className="weather-info-mini-text">Max</p>
        </div>
        <div className="weather-info-mini">
          <p className="weather-info-mini-number">
            {Math.round(weatherData.feels_like)}°C
          </p>
          <p className="weather-info-mini-text">Feels like</p>
        </div>
        <div className="weather-info-mini">
          <p className="weather-info-mini-number">{weatherData.humidity}%</p>
          <p className="weather-info-mini-text">Humidity</p>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
