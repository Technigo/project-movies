import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MovieThumb } from './MovieThumb';
import { MOVIES_URL } from 'reusable/urls';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then((json) => setMovies(json.results));
  }, []);

  return (
    <section className='movie-list-container'>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/details/${movie.id}`}>
          <MovieThumb {...movie} />
        </Link>
      ))}
    </section>
  );
};
