import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <section className="movies-wrapper">
      {movies.map((movie) => (
        <Link
          className="movies-container"
          key={movie.id}
          to={`/MovieDetails/${movie.id}`}>

          <img
            className="single-movie"
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path} `}
            alt={movie.title} />
          <div className="movie-hoverinfo">
            <h1>{movie.title}</h1>
            <h4>Released {movie.release_date}</h4>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default MovieList;

