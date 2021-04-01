import React from 'react'

export const MovieCard = ({title, release_date, poster_path}) => {
  return (
    <div className="movie-cover">
      <img src={`http://image.tmdb.org/t/p/w342/${poster_path}`} alt={title} />
      <div className="movie-card-text">
        <h2>{title}</h2>
        <h3>{`Released ${release_date}`}</h3>
      </div>
    </div>
  )
}

