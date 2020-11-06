import React from 'react'

export const MovieDetailed = ({ backdrop_path, poster_path, homepage, title, release_date, overview }) => {
  return (
    <div className="movie-details">
      <img className="backdrop" src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={title}></img>
      <div className="details-container">
        <div>
          <img className="poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}></img>
        </div>
        <div className="movie-text">
          <a href={homepage}>
            <h1>{title}</h1>
          </a>
          <h2>Release date: {release_date}</h2>
          <p>{overview}</p>
        </div>
      </div>
    </div >
  )
}