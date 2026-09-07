import CityMeta from "./CityMeta";

function WeatherDashboard(selectedCity) {
  return (
    <div className="weather-dashboard">
      <CityMeta
        population={selectedCity.population ?? "-"}
        elevation={selectedCity.elevation}
        lat={selectedCity.latitude.toFixed(2)}
        lon={selectedCity.longitude.toFixed(2)}
      ></CityMeta>
    </div>
  );
}

export default WeatherDashboard;
