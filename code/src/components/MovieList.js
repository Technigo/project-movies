import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ movieList }) => {
  return (
    <div className="single-movie-wrapper">
      {movieList.map((singleMovie) => {
        return (
          <div key={singleMovie.id} style={{ position: 'relative' }}>
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`} alt="movie poster" />
            <Link className="movie-link" to={`/details/${singleMovie.id}`}>
              <div className="single-movie-child">
                <h2 style={{ margin: 0 }}>{singleMovie.title}</h2>
                <p>{singleMovie.release_date}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};