import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const MovieList = ({ movies }) => {
  return (
    <>
      <Header />
      <section className="movie-list">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/MovieDetails/${movie.id}`}
            className="movie-container"
          >
            <div className="movie-img-group">
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="movie-img-overlay"></div>
              <div className="movie-text-overlay">
                <h1 className="movie-title">{movie.title}</h1>
                <h1 className="release-date">
                  Release date: {movie.release_date}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default MovieList;
