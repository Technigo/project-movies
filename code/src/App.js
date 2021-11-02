import React from "react";
import { useState, useEffect } from "react";

import MovieList from "./components/MovieList";

const API_KEY = "682d12076f83a3ee1e6f74f0a2622a54";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const App = () => {
  const [movies, setMovies] = useState([]);

  const makePosterUrl = (url) => {
    return `https://image.tmdb.org/t/p/w500${url}`;
  };

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => setMovies(json.results));
  }, []);
  return <MovieList movies={movies} makePosterUrl={makePosterUrl} />;
};
