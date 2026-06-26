import { useState } from "react";

function Search({ onSearch }) {
  // State to store the city name typed by the user london default value 
  const [city, setCity] = useState("london");
  // Function that runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // Do nothing if input is empty or only spaces
    if (!city.trim()) return;
    // Send city name to parent component (WeatherApp)
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)} // Update state on typing
      />
      <button type="submit">FIND WEATHER</button>
    </form>
  );
}

export default Search;