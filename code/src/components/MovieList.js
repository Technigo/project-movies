import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <Link
          key={movie.id}
          to={`/MovieDetails/${movie.id}`}
          className="movieContainer"
        >
          <img
            src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
            alt={movie.title}
            className="moviePoster"
          />
          <div className="movieInfo">
            <h1>{movie.title}</h1>
            <h2>Release date: {movie.release_date}</h2>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default MovieList;
