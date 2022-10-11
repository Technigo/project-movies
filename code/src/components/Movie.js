import React from 'react';

const Movie = ({ movieTitle, releaseDate, moviePoster }) => {
  return (
    <div className="movie">
      <div className="overlay">
        <h2 className="movie-title movie-text">{movieTitle}</h2>
        <p className="movie-text">Released {releaseDate}</p>
      </div>
      <img src={`http://image.tmdb.org/t/p/w342${moviePoster}`} alt="poster" />
    </div>
  )
}

export default Movie;