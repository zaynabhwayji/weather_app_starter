import { useState } from "react";
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
  // API key from .env file (Vite uses import.meta.env)
  const API_KEY = import.meta.env.VITE_API_KEY;
  // Function to fetch weather data based on city name
  const fetchWeather = async (city) => {
    try {
      // Start loading
      setLoading(true);

      setError("");
      // Fetch data from OpenWeather API
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=8&appid=${API_KEY}`
      );
      // If response is not OK (e.g. city not found)
      if (!res.ok) {
        throw new Error("City not found");
      }
      // Convert response to JSON
      const result = await res.json();

      console.log(result);
      // Save data to state
      setData(result);
      // Stop loading
      setLoading(false);
    } catch (error) {
      // Handle errors
      setError(error.message);
      // Clear old data
      setData(null);
      // Stop loading even if error happens
      setLoading(false);
    }
  };



  return (
    <>
      {/* Search Box */}
      <Search onSearch={fetchWeather} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Weather Results */}
      <CurrentWeather data={data} />
      <HourlyForecast data={data} />

    </>

  );
}

export default WeatherApp;