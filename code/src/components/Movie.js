import React from 'react';

const Movie = ({ name, poster, backdrop, overview, average }) => {
  return (
    <>
      <p>{name}</p>
      <p>{average}</p>
      <img src={`https://image.tmdb.org/t/p/w342${poster}`} alt="" />
      <img src={`https://image.tmdb.org/t/p/w1280${backdrop}`} alt="" />
      <p>{overview}</p>
    </>
  )
}

export default Movie;