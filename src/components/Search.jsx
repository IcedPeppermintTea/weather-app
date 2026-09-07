import { useState, useEffect } from "react";
import Matches from "./Matches.jsx";

function Search({ onSelectCity }) {
  // user is typing possibly city matches
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  /* handle clicking on a city */
  function handleOnSelectCity(city) {
    onSelectCity(city);
    setQuery("");
    console.log(city);
  }

  /* Handle querying on the search bar */
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
      {query != "" ? (
        <Matches
          matchResults={results}
          onSelectCity={handleOnSelectCity}
        ></Matches>
      ) : (
        <></>
      )}
    </>
  );
}

export default Search;
