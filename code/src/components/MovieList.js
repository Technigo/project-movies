import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ movieList }) => {
  return (
    <div className="single-movie-wrapper">
      {movieList.map((singleMovie) => {
        return (
          <div key={singleMovie.id}>
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`} alt="movie poster" />
            <div className="single-movie-inner-wrapper">
              <Link to={`/details/${singleMovie.id}`}>Go to {singleMovie.title} details</Link>
              <h2>{singleMovie.title}</h2>
              <p>{singleMovie.release_date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};