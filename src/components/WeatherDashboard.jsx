import CityHeader from "./CityHeader";
import CityMeta from "./CityMeta";
import LoadingScreen from "./LoadingScreen";

function WeatherDashboard({ selectedCity, forecast }) {
  if (!forecast) return <LoadingScreen />;

  const lat = selectedCity.lat.toFixed(2);
  const lon = selectedCity.lon.toFixed(2);
  return (
    <div className="weather-dashboard">
      <CityHeader
        name={selectedCity.name}
        admin1={selectedCity.admin1}
        country={selectedCity.country}
      />
      <CityMeta
        population={selectedCity.population ?? "-"}
        elevation={selectedCity.elevation ?? "-"}
        lat={lat ?? "-"}
        lon={lon ?? "-"}
      ></CityMeta>
    </div>
  );
}

export default WeatherDashboard;
