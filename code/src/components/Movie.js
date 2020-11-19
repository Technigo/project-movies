import React from 'react';
import { Link } from 'react-router-dom';

import arrow from '../components/back-arrow.png';

export const Movie = ({poster_path, original_title, vote_average, overview, backdrop_path}) => {
  return (
    <section className="movie-details-page" style={{backgroundImage:`url('https://image.tmdb.org/t/p/w1280/${backdrop_path}')`}}>
      <Link to="/" exact="true">
        <div className="back-arrow-text">
          <img className="arrow" src={arrow} alt="back-arrow"/>
          <p className="back-movies-text">Movies</p>
        </div>
      </Link>
      <div className="movie-details-container">
        <img src={`https://image.tmdb.org/t/p/w780/${poster_path}`} alt={original_title} />
        <div className="movie-details-text">
          <h2>{original_title}</h2>
          <p className="movie-rating-text">{`${vote_average} / 10`}</p>
          <p className="movie-overview-text">{overview}</p>
        </div>
      </div>
    </section>
  )
};