import React from "react"
import { Link } from "react-router-dom"

const MovieList = ({ movies }) => {
  return (
    <section className="movie-container">
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt="poster of the movie"
            />{" "}
          </Link>
          <div className="title-release">
            {movie.title} Released: {movie.release_date}
          </div>
        </div>
      ))}
    </section>
  )
}

export default MovieList
