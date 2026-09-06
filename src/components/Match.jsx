function Match({ match_id, match, selectCity }) {
  return (
    <div className="match">
      <div className="match-name-info">
        <p className="match-name">{match.name}</p>
        <p className="match-admin-country">
          {match.admin1} · {match.country}
        </p>
      </div>
      <span className="eyebrow-label">
        {match.latitude.toFixed(2)}, {match.longitude.toFixed(2)}
      </span>
    </div>
  );
}

export default Match;
