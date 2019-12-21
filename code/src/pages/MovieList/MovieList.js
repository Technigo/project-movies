import React, { useEffect, useState } from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';
import * as API from '../../api/Api';
import styles from './MovieList.module.scss';
import { Movie } from '../../components/MovieList/Movie';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    API.getMovies()
      .then(data => {
        const { results } = data;
        const computedResults = results
          .filter(movie => {
            return (
              // Filtering out posters with inconsistent height and to get an even number of movies to display in the grid
              movie.id !== 516700 &&
              movie.id !== 651693 &&
              movie.id !== 11 &&
              movie.id !== 474350 &&
              movie.id !== 159323 &&
              movie.adult !== true
            );
          })
          .sort((a, b) => b.release_date - a.release_date)
          .slice(0, 16);
        console.log(computedResults);
        setMovies(computedResults);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err); // Configure loading error state
      });
  }, []);

  TopBarProgress.config({
    barColors: {
      '0': '#ff0000',
      '1.0': '#ff0000'
    },
    shadowBlur: 5,
    barThickness: 2
  });

  return (
    <div>
      {isLoading ? (
        <div>
          <TopBarProgress />
        </div>
      ) : (
        <div className={styles.movieList}>
          {movies.map(movie => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </div>
  );
};
