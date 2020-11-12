import React, { useEffect, useState } from 'react';

import { UPCOMING_MOVIES_URL } from 'urls';
import { MovieThumb } from 'components/MovieThumb';

import 'styles/movielist.css';

export const UpcomingMoviesList = () => {
  const [upcomingmovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
    fetch(UPCOMING_MOVIES_URL)
    .then(res => res.json())
    .then(json => {
      setUpcomingMovies(json.results)
    })
  }, []);

  // Send the results array to MovieThumb component 
  // where we pick the objects we need
  return (
    <section className="poster-container">
      {upcomingmovies.map((movie) => (
        <MovieThumb key={movie.id} {...movie} />
      ))}
    </section>
  );
};