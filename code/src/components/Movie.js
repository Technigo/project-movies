import React from 'react';
// &nbsp;
const Movie = ({ name, poster, overview, average }) => {
  return (
    <div className="page-content">
      <img className="border-pic" src={`https://image.tmdb.org/t/p/w342${poster}`} alt="movie-poster" />
      <div className="title-box">
        <h2>{name}</h2>
        <p>{average}</p>
        <p className="summary">{overview}</p>
      </div>
    </div>
  )
}

export default Movie;