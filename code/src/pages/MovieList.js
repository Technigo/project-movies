import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../api/Api';
import styles from './MovieList.module.scss';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    API.getMovies()
      .then(data => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.movieList}>
      {movies.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <div className={styles.movie}>
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt="backdrop image"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
