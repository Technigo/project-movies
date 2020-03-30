import React from 'react'
import { Link } from 'react-router-dom'

export const MovieCard = ({ id, title, releaseDate }) => {
  return (

    <section key={id} className="movie-card">
      <Link to={`/movies/${id}`}>
        <h2>{title}</h2>
        <p>{releaseDate}</p>
      </Link>
    </section>

  )
}
