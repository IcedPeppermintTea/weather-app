function CurrentConditions({
  humidity,
  windSpeed,
  windDirection,
  uvIndex,
  uvLabel,
}) {
  return (
    <div className="conditions-strip">
      <div className="condition-cell">
        <span className="condition-label">Humidity</span>
        <span className="condition-value">{humidity}%</span>
      </div>
      <div className="condition-cell condition-cell--divider">
        <span className="condition-label">Wind</span>
        <span className="condition-value">
          {windSpeed}{" "}
          <span className="condition-unit">km/h {windDirection}</span>
        </span>
      </div>
      <div className="condition-cell condition-cell--divider">
        <span className="condition-label">UV index</span>
        <span className="condition-value">
          {uvIndex}{" "}
          <span className="condition-unit condition-unit--uv">{uvLabel}</span>
        </span>
      </div>
    </div>
  );
}

export default CurrentConditions;
