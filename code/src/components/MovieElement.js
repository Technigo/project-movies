import React from 'react'

const MovieElement = ( {poster_path, original_title, release_date} ) => {
  return (
    <div className="popular-movie">
      <img className="movie-img" src={`https://image.tmdb.org/t/p/w780${poster_path}`} alt={original_title}/>
      <div className="movie-details">
        <h1 className="movie-title">{original_title}</h1>
        <p>Released {release_date}</p>
      </div>
    </div>
  )
}

export default MovieElement