import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <section className="list">
      {movies.map((movie) => {
        return (
          <Link
            key={movie.original_title}
            to={`/details/${movie.original_title}`}
            className="list-element">{movie.original_title}
          </Link>
        )
      })}
    </section>
  )
};