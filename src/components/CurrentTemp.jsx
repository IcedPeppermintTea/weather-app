import WeatherIcon from "./WeatherIcon";

function CurrentTemp({ curTemp, appCurTemp, code, isDay, getWeatherIcon }) {
  const cleanAppTemp = getWeatherIcon(code, isDay).replace(/-/g, " ");
  return (
    <div className="current-temp-section">
      <WeatherIcon icon={cleanAppTemp} size={250} />
      <div className="current-temp">
        <span className="main-temp">{curTemp}°</span>
        <p className="feels-like-temp">
          {cleanAppTemp} · feels like {appCurTemp}°
        </p>
      </div>
    </div>
  );
}

export default CurrentTemp;
