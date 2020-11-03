import React from 'react';
import { Link } from 'react-router-dom';

export const TopMovie = ({poster_path, original_title, vote_average, overview, backdrop_path}) => {
  return (
    <>
      <Link to="/top-movies" exact="true">
        <p>Back to Top Movies List</p>
      </Link>
      <div className="movie-details-page">
        <img src={`https://image.tmdb.org/t/p/w780/${poster_path}`} alt={original_title} />
        <h2>{original_title}</h2>
        <p>{`${vote_average} / 10`}</p>
        <p>{overview}</p>
        <img width="300px" src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`} alt={original_title} />
      </div>
    </>
  )
};

//backdrop as background, access backdrop: src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}