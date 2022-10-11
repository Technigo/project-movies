import React from 'react';

const Movie = ({ name, poster, backdrop, overview, average }) => {
  return (
    <>
      <p>{name}</p>
      <p>{average}</p>
      <img src={poster} alt="movie poster" />
      <img src={backdrop} alt="background" />
      <p>{overview}</p>
    </>
  )
}

export default Movie;