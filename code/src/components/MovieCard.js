import React from 'react'
import { Link } from 'react-router-dom'

export const MovieCard = ({ id, title, img, releaseDate }) => {
  return (

    <section className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w342/${img}`} alt={title} ></img>
      <Link to={`/movies/${id}`} className="overlay">
        <div className="movie-info">
          <h2>{title}</h2>
          <p className="release-date">Release: {releaseDate}</p>
        </div>
      </Link>
    </section>

  )
}
