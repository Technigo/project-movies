import React from "react";
import { useState, useEffect } from "react";

import MovieList from "./components/MovieList";

const API_KEY = "682d12076f83a3ee1e6f74f0a2622a54";

// This function takes in a value from a select element, inserts the API_KEY variable and
// returns a new string holding the neccessary information for a API end point.
const makeApiUrl = (path) => path.replace("<<api_key>>", API_KEY);

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // this state variable holds the API url, the state is changed in Selector component
  // but before setting the new state it calls the makeApiUrl function to insert the API_KEY
  const [apiUrl, setApiUrl] = useState(
    makeApiUrl(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1&region=SE"
    )
  );

  // This function takes the returned path from the API response object and concats with the string
  // that holds the http path for displaying poster
  const makePosterUrl = (url) => {
    return `https://image.tmdb.org/t/p/w500${url}`;
  };

  // This fetch happens as soon as the state property which holds the api url is updated
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
        setLoading(false);
      });
  }, [apiUrl]);

  // The loading state property is initialized as true, when the fetch is finished it is set to false
  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <>
      <MovieList
        movies={movies}
        makePosterUrl={makePosterUrl}
        apiKey={API_KEY}
        makeApiUrl={makeApiUrl}
        setApiUrl={setApiUrl}
      />
    </>
  );
};
