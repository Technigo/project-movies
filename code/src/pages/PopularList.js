import React from 'react';
import { Link } from 'react-router-dom';

export const PopularList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <h3>{movie.release_date}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
