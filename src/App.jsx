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
    const params = new URLSearchParams({
      latitude: city.lat,
      longitude: city.lon,
      timezone: "auto",
      current:
        "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,is_day",
      hourly:
        "temperature_2m,weather_code,precipitation_probability,uv_index,is_day,visibility",
      daily:
        "weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max",
    });

    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?${params}`,
      );
      const data = await response.json();
      setForecast(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="app">
      <Search onSelectCity={onSelectCity}></Search>
      {selectedCity ? (
        <WeatherDashboard selectedCity={selectedCity} forecast={forecast} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

export default App;
