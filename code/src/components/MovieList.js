import React, { useState, useEffect } from 'react';

import MovieCard from './MovieCard';
import Loading from './Loading';

const MovieList = ({ api }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = () => {
    const api_key = '54ee7f54ed9c2538cd37d709a09a6ca2';
    const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;

    fetch(POPULAR_URL)
      .then(res => res.json())
      .then(json => setMovies(json.results))
      .catch(error => console.error(error));
  };

  const fetchUpcomingMovies = () => {
    const api_key = '54ee7f54ed9c2538cd37d709a09a6ca2';
    const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;

    fetch(UPCOMING_URL)
      .then(res => res.json())
      .then(json => setMovies(json.results))
      .catch(error => console.error(error));
  };

  const fetchTopMovies = () => {
    const api_key = '54ee7f54ed9c2538cd37d709a09a6ca2';
    const TOP_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`;

    fetch(TOP_URL)
      .then(res => res.json())
      .then(json => setMovies(json.results))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    setLoading(true);
    if (api === 'POPULAR_URL') fetchMovies();
    if (api === 'TOP_URL') fetchTopMovies();
    if (api === 'UPCOMING_URL') fetchUpcomingMovies();
  }, [api]);

  useEffect(() => {
    setLoading(false);
  }, [movies]);

  if (loading) {
    return <Loading />
  } else {
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
  }
};

export default MovieList;