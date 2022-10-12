import React from 'react'
import { Link } from 'react-router-dom'

const Movies = ({ movies }) => {
  return (
    <section className="movies">
      {movies.map((movie) => {
        return (
          <Link
            key={movie.title}
            to={`/details/${movie.id}`}
            className="movie">
            <div className="image-container">
              <img className="details-img" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="poster" />
            </div>
            <div className="movie-details">
              <h1> {movie.title} </h1>
              <p> {movie.release_date} </p>
            </div>
          </Link>
        )
      })}
    </section>
  )
}

export default Movies