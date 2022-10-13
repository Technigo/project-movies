import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({ movieList }) => {
  return (
    <section className="movie-list">
      {movieList.map((movie) => (
        <Link
          className="movie-card"
          key={movie.id}
          to={`/movie/${movie.id}`}>
          <div className="movie-info-overlay">
            <h2>{movie.title}</h2>
            <p>Released {movie.release_date}</p>
          </div>
          <img className="movie-img" src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="poster" />
        </Link>
      ))}
    </section>
  )
}

export default MovieList