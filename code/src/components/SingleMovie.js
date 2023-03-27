/* eslint-disable operator-linebreak */
import React, { useState } from 'react';

const SingleMovie = ({ movie }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <>
      <img
        className="movie-list-img"
        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
        alt={`${movie.title}_image`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)} />
      {hovered &&
      <div className="movie-list-short-info">
        <h1 className="movie-title">{movie.title}</h1>
        <p className="movie-release-date">{movie.release_date}</p>
      </div>}
    </>
  )
}

export default SingleMovie;