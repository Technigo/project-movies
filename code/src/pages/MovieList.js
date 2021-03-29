import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import { MovieThumb } from './MovieThumb';

export const MovieList = () => {
  const MOVIES_URL =
    'https://api.themoviedb.org/3/movie/popular?api_key=f86cf72a5f604a49cde375a4fa2c6d61&language=en-US&page=1';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then((json) => setMovies(json.results));
  }, []);

  console.log(movies);

  return (
    <section className='movie-list'>
      {movies.map((movie) => (
        <MovieThumb {...movie} />
      ))}
    </section>
  );
};
