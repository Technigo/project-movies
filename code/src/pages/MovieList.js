import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../api/Api';
import styles from './MovieList.module.scss';
// import TopBarProgress from 'react-topbar-progress-indicator';

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
      {movies
        .filter(movie => {
          return (
            movie.id !== 540247 &&
            movie.id !== 449924 &&
            movie.id !== 474350 &&
            movie.id !== 492188
          );
        })
        .map(movie => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <div className={styles.movie}>
              <img
                src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                alt="poster"
              />
              <div className={styles.overlay}>
                <div className={styles.movieDetails}>
                  <h1>{movie.title}</h1>
                  <p>Released: {movie.release_date}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

// style={{
//   backgroundImage: `url(https://image.tmdb.org/t/p/w780${movie.poster_path})`
// }}

{
  /* <img src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt="backdrop image" /> */
}
