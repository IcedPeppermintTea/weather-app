import CityMeta from "./CityMeta";

function WeatherDashboard({ selectedCity }) {
  const lat = selectedCity.lat.toFixed(2);
  const lon = selectedCity.lon.toFixed(2);
  return (
    <div className="weather-dashboard">
      <CityMeta
        population={selectedCity.population ?? "-"}
        elevation={selectedCity.elevation}
        lat={lat}
        lon={lon}
      ></CityMeta>
    </div>
  );
}

export default WeatherDashboard;
