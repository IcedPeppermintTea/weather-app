import WeatherIcon from "./WeatherIcon";

function CurrentTemp({ curTemp, appCurTemp, code, isDay, getWeatherIcon }) {
  const iconName = getWeatherIcon(code, isDay);
  const displayLabel = iconName.replace(/-/g, " ");
  return (
    <div className="current-temp-section margin-top-30">
      <WeatherIcon icon={iconName} size={250} />
      <div className="current-temp">
        <span className="main-temp">{curTemp}°</span>
        <p className="feels-like-temp">
          {displayLabel} · feels like {appCurTemp}°
        </p>
      </div>
    </div>
  );
}

export default CurrentTemp;
