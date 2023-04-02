import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';

const UPCOMING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=2eb2f32ea6c8d9e53656503050d0b6fa&language=en-US';

const UpcomingMovies = () => {
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

export default UpcomingMovies;
