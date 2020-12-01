import React, { useState, useEffect } from 'react';

import Loader from '../components/Loader';
import Error from '../components/Error';
import MovieThumb from '../components/MovieThumb';
import { API_KEY } from '../api.js';

const MovieList = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const MOVIES_URL = `https://api.themoviedb.org/3/movie/${
    children ? children : 'now_playing'
  }?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    fetch(MOVIES_URL)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error('404');
        }
      })
      .then(json => {
        setMovies(json.results);
        setLoading(false);
      })
      .catch(() => {
        window.location.assign('/error');
      });
  }, [MOVIES_URL]);

  return (
    <main className="list">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {movies.map(movie => (
            <MovieThumb key={movie.id} {...movie} />
          ))}
        </>
      )}
    </main>
  );
};

export default MovieList;
