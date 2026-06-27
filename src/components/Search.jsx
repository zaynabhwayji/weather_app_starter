import { useState } from "react";

function Search({ setCity,city }) {
  // State to store the city name typed by the user london default value 
  const [search,setSearch]= useState(city)
  // Function that runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    // Do nothing if input is empty or only spaces
    if (!search.trim()) return;
    // Send city name to parent component (WeatherApp)
    setCity(search);
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        placeholder="Enter city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Update state on typing
      />
      <button type="submit">FIND WEATHER</button>
    </form>
  );
}

export default Search;