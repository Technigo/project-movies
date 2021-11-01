import React from 'react'
import { Link } from 'react-router-dom'
import { POSTER_URL } from 'utils/url'

export const MovieList = ({ movies }) => {
  return (
    <section style={{ display: 'flex', flexWrap: 'wrap' }}>
      {movies.map(movie => (
        <Link to='/' key={movie.id}>
          <img src={POSTER_URL(movie.poster_path)} alt={movie.title} />
        </Link>
      ))}
    </section>
  )
}
