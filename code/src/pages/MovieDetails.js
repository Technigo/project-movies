import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import * as API from '../api/Api';
import styles from './MovieDetails.module.scss';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [errorLoading, SetErrorLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    console.log(movieId);
    API.getMovie(movieId)
      .then(data => {
        setMovie(data);
        SetErrorLoading(false);
      })
      .catch(err => {
        setMovie({});
        SetErrorLoading(true);
      });
  }, [movieId]);

  if (errorLoading) {
    history.push('/');
  }

  return (
    <div>
      {errorLoading === false && (
        <div
          className={styles.movieDetails}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
          }}
        >
          <p>Movie title: {movie.title}</p>
          <Link to="/">Back</Link>
        </div>
      )}
    </div>
  );
};
