import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ poster_path, original_title, release_date, id }) => {
  return (
    <div className="movie-card">
      <Link to={`/movies/${id}`}>
        <div className="movie-card__image-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
          ></img>
        </div>
        <div className="movie-card__text-container">
          <h1 className="movie-card__title">{original_title}</h1>
          <p className="movie-card__release">Released {release_date}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
