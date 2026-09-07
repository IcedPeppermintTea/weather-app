function CityMeta({ population, elevation, lat, lon }) {
  return (
    <div className="city-meta">
      <div className="stat">
        <span className="stat-label">pop</span>
        <span className="stat-value">{population ?? "-"}</span>
        <span className="divider" aria-hidden="true" />
      </div>
      <div className="stat">
        <span className="stat-label">elev</span>
        <span className="stat-value">{elevation ?? "-"}</span>
        <span className="divider" aria-hidden="true" />
      </div>
      <div className="stat">
        <span className="stat-label">coords</span>
        <span className="stat-value">
          {lat ?? "-"}, {lon ?? "-"}
        </span>
        <span className="divider" aria-hidden="true" />
      </div>
    </div>
  );
}

export default CityMeta;
