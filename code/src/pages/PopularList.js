import React, { useState, useEffect } from 'react';

import { Loader } from '../components/Loader';
import { MovieThumb } from '../components/MovieThumb';

import '../styles/PopularList.css';

export const PopularList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = process.env.REACT_APP_API_KEY_FOR_MOVIE;

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovies(json.results);
        setLoading(false);
      });
  }, [apiKey]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <main className="popular-page">
          {movies.map((movie) => (
            <MovieThumb key={movie.id} {...movie} />
          ))}
        </main>
      )}
    </>
  );
};
