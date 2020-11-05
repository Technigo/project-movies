import React, { useEffect, useState } from "react";

import { MovieThumb } from "components/MovieThumb";
import { Header } from "./Header";

export const MovieList = () => {
  const MOVIES_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=5e0af1d18e77dbd12a3e994aa1316cbf&language=en-US&page=1";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIES_URL)
      .then(response => response.json())
      .then(json => setMovies(json.results));
  }, []);

  return (
    <>
      <Header />
      <main className="movie-list">
        {movies.map(movie => (
          <MovieThumb key={movie.id} {...movie} />
        ))}
      </main>
    </>
  );
};
