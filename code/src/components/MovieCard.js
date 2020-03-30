import React from 'react'
import { Link } from 'react-router-dom'

export const MovieCard = ({ id, title, img, releaseDate }) => {
  return (

    <section key={id} className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w342/${img}`} alt={title} ></img>
      <Link to={`/movies/${id}`}>
        <h2>{title}</h2>
        <p>{releaseDate}</p>
      </Link>
    </section>

  )
}
