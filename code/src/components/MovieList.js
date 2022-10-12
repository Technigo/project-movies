import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({ movies }) => {
  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <Link
          className="movie-card"
          key={movie.id}
          to={`/movieName/${movie.title}`}>
          <div className="movie-info">
            <h2>{movie.title}</h2>
            <p>Release date: {movie.release_date}</p>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default MovieList