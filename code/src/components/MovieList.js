import React, { useEffect, useState } from 'react';

import { MOVIES_URL } from 'urls';
import { MovieThumb } from 'components/MovieThumb';

import 'styles/movielist.css';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

    useEffect(() => {
    fetch(MOVIES_URL)
    .then(res => res.json())
    .then(json => {
      setMovies(json.results);
    })
  }, []);

  // Send the results array to MovieThumb component 
  // where we pick the objects we want to display
  return (
    <section className="poster-container">
      {movies.map((movie) => (
        <MovieThumb key={movie.id} {...movie} />
      ))}
    </section>
  );
};