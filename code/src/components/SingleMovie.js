/* eslint-disable operator-linebreak */
import React from 'react';

const SingleMovie = ({ movie }) => {
  return (
    <>
      <img
        className="movie-list-img"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title}_image`} />

      <div className="movie-list-short-info">
        <h1 className="movie-title">{movie.title}</h1>
        <p className="movie-overview">{movie.overview}</p>
        <p className="movie-release-date">Release date: {movie.release_date}</p>
      </div>
    </>
  )
}

export default SingleMovie;