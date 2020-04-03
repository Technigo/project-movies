import React from 'react'
import { Link } from 'react-router-dom'

export const MovieThumb = ({ id, title, release_date, poster_path }) => {


  return (
    <Link to={`/movies/${id}`}>
      <section className="movie-thumb">
        <div className="movie-poster-wrapper">
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w342${poster_path}`}
            alt={title}
          />
          <div className="movie-thumb-description">
            <h1>{title}</h1>
            <p>Released {release_date}</p>
          </div>
        </div>
      </section>
    </Link>
  )
}