import React from 'react';
import { Link } from 'react-router-dom';

export const List = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => {
        return (
          <p key={movie.original_title}>
            <Link to={`/details/${movie.original_title}`}>
              Go to {movie.original_title} details
            </Link>
          </p>
        );
      })}
    </>
  );
};

// <div key={movie.id}>
//             <h2>{movie.original_title}</h2>
//             <p>{movie.overview}</p>
//             <img
//                 src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
//                 alt={movie.original_title}
//             />
//             </div>
