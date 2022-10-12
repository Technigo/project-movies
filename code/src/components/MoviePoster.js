import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MoviePoster.module.css';

const MoviePoster = (props) => {
  return (
    <Link
      className={styles.poster}
      key={props.poster.id}
      to={`/posters/${props.poster.id}`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.poster.poster_path}`}
        alt=""
      />
      <div className={styles.posterInfo}>
        <h1 className={styles.title}> {props.poster.title}</h1>
        <p>{props.poster.release_date}</p>
      </div>
    </Link>
  );
};

export default MoviePoster;
