import React from 'react'
import { Link } from 'react-router-dom'

import './MovieThumbs.css'

export const MovieThumb = ({ id, poster_path, title, release_date }) => {
  const year = new Date(release_date).getFullYear()
  return (
    <article className='movie-thumb'>
      <Link to={`/movies/${id}`}>
        <img
          className='movie-poster'
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          alt={title}
        />
        <div className='movie-overlay'>
          <h2 className='movie-thumb-title'>{title}</h2>
          <p className='released-date'>{year}</p>
        </div>
      </Link>
    </article>
  )
}
