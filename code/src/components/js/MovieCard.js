import React from "react";
import { Link } from "react-router-dom";

import "..//css/moviecard.css";

export const MovieCard = ({ id, title, release_date, poster_path }) => {
  return (
    <div className="movie-card">
      <Link to={`/movies/${id}`}>
        <img
          className="movie-image"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <div className="card-content-container">
          <h2 className="movie-title">{title}</h2>
          <p className="release-date">Released {release_date}</p>
        </div>
      </Link>
    </div>
  );
};