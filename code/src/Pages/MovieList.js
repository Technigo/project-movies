import React, { useState, useEffect } from "react";

import { MOVIES_URL } from "../reuseables/APIs";
import { MovieThumbnail } from "components/MovieThumbnail";

import "../index.css";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then((json) => setMovies(json.results));
  }, []);

  return (
    <>
      <section className="movie-list-container">
        {movies.map((movie) => {
          return <MovieThumbnail {...movie} key={movie.id} />;
        })}
      </section>
    </>
  );
};
