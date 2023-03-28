import React from 'react';
import { Link } from 'react-router-dom';

export const Movie = ({ title, releaseDate, movieID, poster }) => {
  return (

    <Link
      to={`/movies/${movieID}`}>
      <img src={`http://image.tmdb.org/t/p/w342${poster}`} alt="movie" />
      <h1>{title}</h1>
      <p>Released {releaseDate}</p>
    </Link>
  )
}