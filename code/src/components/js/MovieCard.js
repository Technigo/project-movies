import React from "react";
import { Link } from "react-router-dom";

import "..//css/moviecard.css";

export const MovieCard = ({ id, title, release_date, poster_path }) => {
  return (
    <Link to={`/movies/${id}`}>
      <article className="movie-card">
        <h2 className="movie-title">{title}</h2>
        <div className="movie-image-wrapper">
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
          <p className="image-description">Released {release_date}</p>
        </div>
      </article>
    </Link>
  );
};
