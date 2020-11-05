import React from 'react';
import { Link } from "react-router-dom";

export const MovieCard =({title, poster_path, vote_average, id}) => {
  return(
    <Link to={`/movies/${id}`}>
    <section className="movie-card">
  {title}
  <div className="movie-card-image-wrapper">
    <img className="movie-card-image" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
  <p className="movie-card-image-description">{vote_average}</p>
  </div>
</section>
    </Link>
  )
}