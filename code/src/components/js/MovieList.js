import React, { useState, useEffect } from "react";

import { MovieCard } from "./MovieCard";

import "..//css/movielist.css";

const API_KEY = "88b00ce6c0c72d59de65e4b1fcce3a85";
const URL_POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(URL_POPULAR_MOVIES)
      .then((response) => response.json())
      .then((json) => setMovies(json.results));
  }, []);

  return (
    <section className="movies-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          name={movie.title}
          rating={movie.vote_average}
          image={movie.backdrop_path}
          moviedescription={movie.overview}
        />
      ))}
    </section>
  );
};
