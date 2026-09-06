import { useState, useEffect } from "react";
import Matches from "./Matches.jsx";

function Search({ selectedCity, onSelectCity }) {
  // user is typing possibly city matches
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // if user stops typing for 300ms - send api request to geolocation
  useEffect(() => {
    let ignore = false;

    if (query.trim() === "") {
      return;
    }

    // send api request only after 300ms
    const searchTimeout = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=6&language=en&format=json`,
        );
        const data = await response.json();

        if (!ignore) {
          setResults(data.results ?? []);
        }

        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    }, 300);

    // cleanup before the next effect / unmount
    return () => {
      ignore = true;
      clearTimeout(searchTimeout);
    };
  }, [query]);

  return (
    <>
      <div className="search">
        <div className="icon-gray-circle" aria-hidden="true"></div>
        <input
          type="text"
          placeholder="search city"
          id="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>
      <Matches matchResults={results} onSelectCity={onSelectCity}></Matches>
    </>
  );
}

export default Search;
