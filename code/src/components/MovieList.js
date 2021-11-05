import React from 'react'
import { Link } from 'react-router-dom'


const MovieList = ({ movies }) => {
  return (
    <section className="movie-container">
      {movies.map((movie) => (
        <div className="list" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <img
              className="list-poster"
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt="poster of the movie"

            />

            <div className="title-release">
              <span className="text-box">
                <h1>{movie.title}</h1>
                <p>Released: {movie.release_date}</p>
              </span>
            </div>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default MovieList
