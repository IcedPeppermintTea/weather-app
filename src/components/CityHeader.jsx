function CityHeader({ name, admin1, country }) {
  return (
    <div className="city-header margin-top-30">
      <h1 className="city-name">{name}</h1>
      <span className="city-admin1-country">
        {admin1} · {country}{" "}
      </span>
    </div>
  );
}
export default CityHeader;
