import React from 'react';
import { Link } from "react-router-dom";

import "components.css/movieCard.css";

// this is a card of the movies that are shown on the main page
export const MovieCard =({title, poster_path, vote_average, id}) => {
  return(
    <Link className="movie-card-link" to={`/movies/${id}`}>
    <img className="movie-card-image" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}></img>
{/* <div className="movie-card-details">
  <h1>{title}</h1>
  <p>{vote_average}</p>
  </div> */}
    </Link>
  )
}