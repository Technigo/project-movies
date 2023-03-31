/*
import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';

const UPCOMING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=5e0fb7ffc6ed1b5ff2d5d2db9f68e259&language=en-US';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(UPCOMING_MOVIES_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results.reverse());
      });
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default PopularMovies;
*/