import React from 'react';
import { Link } from "react-router-dom"

export const MovieList = ({movies}) => {

  return (

  <article className="movie-list">
    {movies.map(movie => (

    <Link to={`/movie/${movie.id}`} className="movie-item" key={movie.id}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie poster"></img>

      <div className="movie-details" key={movie.id}>
        <h2>{movie.title}</h2>
        <p>Released: {movie.release_date}</p>
      </div> 
    </Link>

    ))}
  </article>
  
  )
}