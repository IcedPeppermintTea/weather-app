function ExtraCards({ uvIndex, uvLabel, sunset, daylightLeft }) {
  return (
    <div className="extra-cards margin-top-30">
      <div className="extra-card">
        <span className="extra-card-label">Sun safety</span>
        <div className="extra-card-value">
          <span className="extra-card-number">{uvIndex}</span>
          <span className="extra-card-unit">UV index</span>
        </div>
        <span className="extra-card-badge extra-card-badge--sun">
          {uvLabel}
        </span>
      </div>

      <div className="extra-card">
        <span className="extra-card-label">Daylight left</span>
        <div className="extra-card-value">
          <span className="extra-card-number">{daylightLeft}</span>
        </div>
        <span className="extra-card-sub">until sunset · {sunset}</span>
      </div>
    </div>
  );
}

export default ExtraCards;
