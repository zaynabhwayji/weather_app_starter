import { getWeatherIcon } from "../utils/weatherIcon";

function Hour({ item }) {
  // Extract temperature from API data for this specific hour
  const temp = item.main.temp;
  // Extract the weather condition ID from the API data
  // item.weather is an array, so we take the first element [0]
  // .id is the unique weather code 
  const icon = getWeatherIcon(item.weather[0].id);
  // Convert time string (dt_txt) into a Date object and get the hour
  const hour = new Date(item.dt_txt).getHours();
  return (
    <div className="hour">
      <p>{hour}:00</p>
      <img src={icon} alt="weather icon" width="50" />
      <p>{temp}°C</p>
    </div>
  );
}

export default Hour;