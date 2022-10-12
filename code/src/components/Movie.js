import React from 'react';

const Movie = ({ name, poster, overview, average }) => {
  return (
    <div className="page-content">
      <p>{name}</p>
      <p>{average}</p>
      <img className="border-pic" src={`https://image.tmdb.org/t/p/w342${poster}`} alt="" />
      <p>{overview}</p>
    </div>
  )
}

export default Movie;