import React from 'react'
import { Link } from 'react-router-dom'

export const Movie = ({ id, title, poster_path }) => {
  return (
    <Link to={`/movies/${id}`}>
      <img className="movie-card" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}></img>
    </Link >
  )
}