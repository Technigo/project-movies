import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <section className="list-wrapper">
      {movies.map((movie) => (
        <Link
          className="movie-container"
          key={movie.id}
          to={`/MovieDetails/${movie.id}`}>
          <img
            className="list-element"
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title} />
          <div className="movie-info">
            <h1>{movie.title}</h1>
            <h4>Released {movie.release_date}</h4>
          </div>
        </Link>
      ))}
    </section>
  );
};