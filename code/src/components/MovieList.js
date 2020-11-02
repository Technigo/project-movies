import React, { useEffect, useState } from 'react';
import { MOVIES_URL } from 'urls';
import 'styles/movielist.css';
import { MovieThumb } from 'components/MovieThumb';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

    useEffect(() => {
    fetch(MOVIES_URL)
    .then(res => res.json())
    .then(json => {
      setMovies(json.results)
    })
  }, []);

  return (
    <section className="poster-container">
      {movies.map((movie) => (
        <MovieThumb key={movie.id} {...movie} />
      ))}
    </section>
  );
};

