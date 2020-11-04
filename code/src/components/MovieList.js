import React, { useState, useEffect } from 'react';

import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    const api_key = '54ee7f54ed9c2538cd37d709a09a6ca2';
    const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;

    fetch(POPULAR_URL)
      .then(res => res.json())
      .then(json => setMovies(json.results))
      .catch(error => console.error(error));
  };

  return (
    <section className="popular-page">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          {...movie}
        />
      ))}
    </section>
  );
};

export default MovieList;