import Match from "./Match";

function Matches({ matchResults, onSelectCity }) {
  const matches = matchResults.length;
  return (
    <div className="matches-card">
      <span className="eyebrow-label">{matches} Matches</span>
      <div>
        {matchResults.map((match, match_id) => (
          <Match key={match_id} match={match} selectCity={onSelectCity}></Match>
        ))}
      </div>
    </div>
  );
}

export default Matches;
