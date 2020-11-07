/* eslint-disable camelcase */
import React from 'react'
import { Link } from 'react-router-dom'

export const MovieThumb = ({
  id,
  title,
  release_date,
  poster_path
}) => {
  return (
    <Link to={`/movies/${id}`}>
      <article className="thumb-container">
        <img className="cover" alt={title} src={`https://image.tmdb.org/t/p/w342/${poster_path}`} />
        <div className="hover-layer">
          <h2>{title}</h2>
          <p>Released: {release_date}</p>
        </div>
      </article>
    </Link>
  )
}