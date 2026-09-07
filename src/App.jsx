import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import EmptyState from "./components/EmptyState";
import WeatherDashboard from "./components/WeatherDashboard";

function App() {
  // a city is selected by the user (type object)
  const [selectedCity, setSelectedCity] = useState(null);

  function onSelectCity(city) {
    setSelectedCity(city);
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
