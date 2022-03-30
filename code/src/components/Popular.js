import React from 'react'

import { Link } from 'react-router-dom'

const Popular = ({ list }) => {
  return (
    <section className="movie-list">
      {list.map((movie) => (
        <Link
          key={movie.title}
          className="movie-card"
          to={`/details/${movie.id}`}
        >
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="details">
            <h1>{movie.title}</h1>
            <p>Released {movie.release_date}</p>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default Popular
