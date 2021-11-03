import React from "react";
import { useState, useEffect } from "react";

import MovieList from "./components/MovieList";

const API_KEY = "682d12076f83a3ee1e6f74f0a2622a54";
const API_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=SE`;

export const App = () => {
  const [movies, setMovies] = useState([]);

  // This function takes the returned path from the API response object and concats with the string
  // that holds the http path for displaying poster
  const makePosterUrl = (url) => {
    return `https://image.tmdb.org/t/p/w500${url}`;
  };

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setMovies(json.results));
  }, []);
  return (
    <MovieList movies={movies} makePosterUrl={makePosterUrl} apiKey={API_KEY} />
  );
};
