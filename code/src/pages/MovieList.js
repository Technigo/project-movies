import React, { useEffect, useState } from 'react';
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
      <p>Movie list!</p>
    </div>
  );
};
