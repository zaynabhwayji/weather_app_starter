import { getWeatherIcon} from "../utils/weatherIcon";

function CurrentWeather({ data }) {
  // If no data is available, don't render the component
  if (!data) return null;
  // Extract current temperature from API response
  const temp = data.list[0].main.temp;

  const icon = getWeatherIcon(data.list[0].weather[0].id);

  return (
    <div className="current">
      <img src={icon} alt="weather icon" width="50" />
      <p>overcasts clouds</p>
      <p className="temp"><span>Temperature : </span>{temp}°C</p>
      <p className="hp"> <span>Humidity : </span>{data.list[0].main.humidity}% <span>Pressure : </span> {data.list[0].main.pressure}</p>
    </div>
  );
}

export default CurrentWeather;