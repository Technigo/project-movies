import React from "react";
import { Link } from "react-router-dom";

import "components/movie-list.css";


const MovieList = ({ title, vote_average, release_date, poster_path, id }) => {

  const POSTER_URL = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <Link to={`/movies/:${id}`}>
      <div className="movie-card">
        <img className="movie-img" src={POSTER_URL} alt="" />
        <div className="movie-details">
          <h1>{title}</h1>
          <p>Rating {vote_average}/10</p>
          <p>Released {release_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieList;