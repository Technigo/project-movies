import React, { useEffect, useState } from 'react';
import { TOPRATED_MOVIES_URL } from 'urls';
import 'styles/movielist.css';
import { MovieThumb } from 'components/MovieThumb';

export const TopratedMoviesList = () => {
  const [topratedmovies, setTopratedMovies] = useState([]);

    useEffect(() => {
    fetch(TOPRATED_MOVIES_URL)
    .then(res => res.json())
    .then(json => {
      setTopratedMovies(json.results)
    })
  }, []);

  // Send the results array to MovieThumb component 
  // where we pick the objects we need
  return (
    <section className="poster-container">
      {topratedmovies.map((movie) => (
        <MovieThumb key={movie.id} {...movie} />
      ))}
    </section>
  );
};

