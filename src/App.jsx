import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import EmptyState from "./components/EmptyState";
import WeatherDashboard from "./components/WeatherDashboard";

function App() {
  // a city is selected by the user (type object)
  const [selectedCity, setSelectedCity] = useState(null);
  // current forecase - based on selected city (type object)
  const [forecast, setForecast] = useState(null);

  async function onSelectCity(city) {
    setSelectedCity(city);
    setForecast(null);
    // call forecast api
    const response = await fetch();
  }

  return (
    <div className="app">
      <Search onSelectCity={onSelectCity}></Search>
      {selectedCity ? (
        <WeatherDashboard selectedCity={selectedCity} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

export default App;
