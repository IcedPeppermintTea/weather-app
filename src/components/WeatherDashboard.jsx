import CityMeta from "./CityMeta";

function WeatherDashboard(selectedCity) {
  return (
    <div className="weather-dashboard">
      <CityMeta
        population={selectedCity.population ?? "-"}
        elevation={selectedCity.elevation}
        lat={selectedCity.latitude}
        lon={selectedCity.longitude}
      ></CityMeta>
    </div>
  );
}

export default WeatherDashboard;
