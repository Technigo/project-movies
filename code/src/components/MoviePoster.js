import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MoviePoster.module.css';

const MoviePoster = (props) => {
  return (
    <div className={styles.poster}>
      <Link key={props.poster.id} to={`/posters/${props.poster.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.poster.poster_path}`}
          alt=""
        />
      </Link>
    </div>
  );
};

export default MoviePoster;
