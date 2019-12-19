import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Movie.module.scss';
import { GridImage } from '../../components/MovieList/GridImage';

export const Movie = ({ id, poster_path, title, release_date }) => {
  return (
    <Link to={`/movies/${id}`}>
      <div className={styles.movie}>
        <GridImage imagePath={poster_path} />
        <div className={styles.overlay}>
          <div className={styles.movieDetails}>
            <h1>{title}</h1>
            <p>Released: {release_date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
