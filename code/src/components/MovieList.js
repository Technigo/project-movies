import React from "react";
import { Link } from "react-router-dom";

import "components/movie-list.css";

const MovieList = ({ title, release_date, poster_path, id }) => {

  const POSTER_URL = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="movie-card">
      <Link to={`/movies/${id}`} className="link">
        <img className="movie-img" src={POSTER_URL} alt={title} />
        <div className="movie-details">
          <h1>
            {title}
          </h1>
          <p>
            Released {release_date}
          </p>
        </div>
      </Link>
    </div >
  );
};

export default MovieList;