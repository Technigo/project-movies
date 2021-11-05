import React from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ films }) => {
  return (
    <div className="main-container">
      {films.map((movie) => (
        <Link key={movie.id} to={`/details/${movie.id}`} className="movie-link">
          <div className="movie-container">
            <div className="overlay">
              <section className="text-wrapper">
                <h1 className="movie-title">{movie.original_title}</h1>
                <p className="release-date">{movie.release_date}</p>
              </section>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
              alt="poster"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MoviesList;
