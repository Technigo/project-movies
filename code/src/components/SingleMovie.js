import React from 'react';

const SingleMovie = ({ movie }) => {
  return (
    <div className="movie-list-section" key={movie.id}>
      <img className="movie-list-img" src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={`${movie.title}_image`} />
      {/* <div className="movie-list-short-info">
        <h1>{movie.title}</h1>
        <p>{movie.release_date}</p>
      </div> */}
    </div>
  )
}

export default SingleMovie;