import React from 'react'
import { Link } from 'react-router-dom'

export const MovieThumb = ({ mayo, title, release_date, poster_path }) => {


  return (
    <Link to={`/movies/${mayo}`}>
      <section className="movie-thumb">
        {title}
        <div className="movie-poster-wrapper">
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w342${poster_path}`}
            alt={title}
          />
          <p className="release-date">{release_date}</p>
        </div>
      </section>
    </Link>
  )
}