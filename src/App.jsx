import { useEffect, useState } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import './index.css';

function WeatherApp() {
  // State to store weather data from API
  const [data, setData] = useState(null);
  // State to handle loading status (true while fetching data)
  const [loading, setLoading] = useState(false);
  // State to store error messages
  const [error, setError] = useState("");
  const [city,setCity]=useState("london")  // API key from .env file (Vite uses import.meta.env)
  const API_KEY = import.meta.env.VITE_API_KEY;
 const fetchWeather = async () => {
  try {
    setLoading(true);
    setError("");

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=8&appid=${API_KEY}`);

    if (!res.ok) {
      throw new Error("City not found");
    }

    const result = await res.json();
    setData(result);
  } catch (error) {
    setError(error.message);
    setData(null);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
  fetchWeather();
}, [city]);
  // Function to fetch weather data based on city name




  return (
    <>
      {/* Search Box */}
      <Search setCity={setCity} city={city} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Weather Results */}
      <CurrentWeather data={data} />
      <HourlyForecast data={data} />

    </>

  );
}

export default WeatherApp;