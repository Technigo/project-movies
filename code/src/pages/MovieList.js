import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export const MovieList = ({ movies }) => {
  return (
    <section className="list-container">
      {movies.map((movie) => (
        <Link to={`/details/${movie.id}`} key={movie.id}>
          <div className="movie-card-container" key={movie.original_title}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt="movie poster"
            ></img>
            <div className="movie-card-overlay">
              <div className="movie-card-text">
                <h1 className="movie-title">{movie.original_title}</h1>
                <p className="movie-release-text">
                  Released {movie.release_date}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};
