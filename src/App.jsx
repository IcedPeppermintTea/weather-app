import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import EmptyState from "./components/EmptyState";
import WeatherDashboard from "./components/WeatherDashboard";

function App() {
  // a city is selected by the user (type object)
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="app">
      <h1>Weather</h1>
      <Search onSelectCity={setSelectedCity}></Search>
      {selectedCity ? (
        <WeatherDashboard selectedCity={selectedCity} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

export default App;
