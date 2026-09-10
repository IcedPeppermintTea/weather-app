function ToWear({ temp, code, windSpeed, precipProbability }) {
  // give clothing advice based on current forecast
  function getClothingAdvice({
    temp,
    weatherCode,
    windSpeed,
    precipProbability,
  }) {
    const items = [];

    if (temp < 40) items.push("heavy coat");
    else if (temp < 55) items.push("jacket");
    else if (temp < 68) items.push("light layer");

    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code))
      items.push("umbrella");
    if ([71, 73, 75, 77, 85, 86].includes(code)) items.push("boots");
    if (windSpeed > 20) items.push("windproof layer");
    if (precipProbability > 40 && !items.includes("umbrella"))
      items.push("umbrella");

    if (items.length === 0) return "You're set — nothing extra needed today.";
    return `Bring a ${items.join(" and a ")}.`;
  }

  const advice = getClothingAdvice({
    temp,
    code,
    windSpeed,
    precipProbability,
  });

  return (
    <div className="to-wear">
      <span className="to-wear-label">What to wear</span>
      <p className="to-wear-message">{advice}</p>
    </div>
  );
}

export default ToWear;
