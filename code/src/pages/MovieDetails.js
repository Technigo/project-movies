import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import * as API from '../api/Api';
import styles from './MovieDetails.module.scss';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    API.getMovie(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [movieId]);

  if (!movie) {
    return <div>Not found!</div>;
  }

  return (
    <div>
      Movie title <b>{movie.title}</b>!<br />
      <Link to="/">Back to the list</Link>
    </div>
  );
};
