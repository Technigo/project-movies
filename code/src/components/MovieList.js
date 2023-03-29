import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({ movieList }) => {
  return (
    <section className="movie-wrapper">
      <div className="movie-list">
        {movieList.map((movie) => (
          <Link
            className="card-group"
            key={movie.id}
            to={`/movie/${movie.id}`}>
            <img className="movie-img" src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="poster" />
            <div className="card-image-overlay" />
            <div className="card-text-overlay">
              <h2>{movie.title}</h2>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default MovieList