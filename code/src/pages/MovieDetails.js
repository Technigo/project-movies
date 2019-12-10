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
        return;
      });
  }, [movieId]);
  return (
    <div>
      {movie.id ? (
        <div>
          Movie title <b>{movie.original_title}</b>!<br />
          <Link to="/">Back to the list</Link>
        </div>
      ) : (
        <div>
          Not found!
          <br />
          <Link to="/">Back to the list</Link>
        </div>
      )}
    </div>
  );
};
