import CityHeader from "./CityHeader";
import CityMeta from "./CityMeta";
import CurrentConditions from "./CurrentConditions";
import CurrentTemp from "./CurrentTemp";
import LoadingScreen from "./LoadingScreen";
import ToWear from "./ToWear";

function WeatherDashboard({ selectedCity, forecast }) {
  if (!forecast) return <LoadingScreen />;

  const lat = selectedCity.lat.toFixed(2);
  const lon = selectedCity.lon.toFixed(2);

  // get index for current hour
  const nowIndex = forecast.hourly.time.findIndex(
    (t) => t.slice(0, 13) === forecast.current.time.slice(0, 13), // "YYYY-MM-DDTHH"
  );
  // get current uv index based on nowIndex
  const currentUv = forecast.hourly.uv_index[nowIndex] ?? 0;

  // get current precipitation probability based on nowIndex
  const currentPrecip = forecast.hourly.precipitation_probability[nowIndex];

  function getWeatherIcon(code, isDay) {
    const map = {
      0: isDay ? "clear-day" : "clear-night",
      1: isDay ? "clear-day" : "clear-night",
      2: isDay ? "partly-day" : "partly-night",
      3: "overcast",
      45: "fog",
      48: "fog",
      51: "drizzle",
      53: "drizzle",
      55: "drizzle",
      61: "rain",
      63: "rain",
      65: "rain",
      71: "snow",
      73: "snow",
      75: "snow",
      77: "snow",
      80: "rain",
      81: "rain",
      82: "rain",
      85: "sleet",
      86: "sleet",
      95: "thunder",
    };
    return map[code] ?? "clear-day";
  }

  function getUvLabel(uvIndex) {
    if (uvIndex < 3) return "Low";
    if (uvIndex < 6) return "Moderate";
    if (uvIndex < 8) return "High";
    if (uvIndex < 11) return "Very high";
    return "Extreme";
  }

  return (
    <div className="weather-dashboard">
      <div className="flex-row flex-justify-between">
        <div>
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
        <CurrentTemp
          curTemp={forecast.current.temperature_2m}
          appCurTemp={forecast.current.apparent_temperature}
          code={forecast.current.weather_code}
          isDay={forecast.current.is_day}
          getWeatherIcon={getWeatherIcon}
        />
      </div>
      <CurrentConditions
        humidity={forecast.current.relative_humidity_2m}
        windSpeed={forecast.current.wind_speed_10m}
        windDirection={forecast.current.wind_direction_10m}
        uvIndex={currentUv}
        uvLabel={getUvLabel(currentUv)}
      />
      <ToWear
        temp={forecast.current.temperature_2m}
        code={forecast.current.weather_code}
        windSpeed={forecast.current.wind_speed_10m}
        precipProbability={currentPrecip}
      />
    </div>
  );
}

export default WeatherDashboard;
