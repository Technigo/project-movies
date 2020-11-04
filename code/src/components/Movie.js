import React from 'react'
import { Link } from 'react-router-dom'

export const Movie = ({ id, title, poster_path }) => {
  return (
    <Link className="movie-card-link" to={`/movies/${id}`}>
      {/* "to" decides the path name and the value of the movieId variable I have in App.js and MovieDetails */}
      <img className="movie-card-image" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}></img>
    </Link >
  )
}