import React from 'react';

const Movie = ({ name, poster, overview, average }) => {
  return (
    <section className="page-content">
      <img className="border-pic" src={`https://image.tmdb.org/t/p/w342${poster}`} alt="movie-poster" />
      <div className="title-box">
        <h1>{name}</h1>
        <p>⭐ {average}</p>
        <p className="summary">{overview}</p>
      </div>
    </section>
  )
}

export default Movie;