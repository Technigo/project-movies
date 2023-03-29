/* import React, { useState } from 'react'; */
import React from 'react'
import { Link } from 'react-router-dom';

const Movies = ({ title, releaseDate, movieId, poster }) => {
  return (

    <Link to={`/details/${movieId}`}>
      <img src={`http://image.tmdb.org/t/p/w342${poster}`} alt="movie" />
      <div>
        <h1>{title}</h1>
        <p>Release {releaseDate}</p>
      </div>

    </Link>
  )
}

export default Movies;