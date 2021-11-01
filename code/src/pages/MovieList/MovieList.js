import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import "./MovieList.css";

const MovieList = ({ movieList }) => {
  return (
    <main className="movie-list-container">
      {movieList.map((movie) => (
        <Link to={`/details/${movie.id}`} key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt={movie.title}
            className="movie-image"
          />
          <div className="movie-title-date">
            <h1>{movie.title}</h1>
            <p>Released: {moment(movie.release_date).format("LL")}</p>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default MovieList;
