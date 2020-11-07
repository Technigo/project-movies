import React, { useState, useEffect } from "react";

import { MovieCard } from "../components/js/MovieCard";

import "..//components/css/moviestartpage.css";

export const MovieStartPage = () => {
  const API_KEY = "88b00ce6c0c72d59de65e4b1fcce3a85";
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    const URL_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(URL_MOVIES)
      .then((response) => response.json())
      .then((json) => setMovie(json.results));
  }, []);

  return (
    <section className="movie-start-page">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </section>
  );
};
