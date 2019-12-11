import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';
import * as API from '../api/Api';
import styles from './MovieDetails.module.scss';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [errorLoading, SetErrorLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    console.log(movieId);
    setIsLoading(true);
    API.getMovie(movieId)
      .then(data => {
        setMovie(data);
        setIsLoading(false);
        SetErrorLoading(false);
      })
      .catch(err => {
        setMovie({});
        SetErrorLoading(true);
      });
  }, [movieId]);

  TopBarProgress.config({
    barColors: {
      '0': '#ff0000',
      '1.0': '#ff0000'
    },
    shadowBlur: 5,
    barThickness: 2
  });

  if (errorLoading) {
    history.push('/');
  }

  return (
    <div>
      {isLoading ? (
        <div>
          <TopBarProgress />
        </div>
      ) : (
        <div>
          {errorLoading === false && (
            <div
              className={styles.movieDetails}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
              }}
            >
              <div className={styles.overlay}>
                <p>Movie title: {movie.title}</p>
                <Link to="/">Back</Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
