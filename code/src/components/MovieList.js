import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
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

export default MovieList;

// 1) Map movies, wrapped in section list wrapper
// 2)
// to get the POSTER IMAGE, the poster_path need to be added to at the end shttps://image.tmdb.org/t/p/w780
// {movie.release_date} for when released