import { useState } from "react";
import "./App.css";
import Search from "./components/Search";

function App() {
  // a city is selected by the user
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="app">
      <h1>Weather</h1>
      <Search
        selectedCity={selectedCity}
        onSelectCity={setSelectedCity}
      ></Search>
    </div>
  );
}

export default App;
