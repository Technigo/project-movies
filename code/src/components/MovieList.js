import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({ movieList }) => {
  console.log(movieList)
  return (
    <article>
      {movieList.map((movie) => {
        return (
          <Link className="movies" key={movie.id} to={`/moviedetails/${movie.title}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} poster`} />
            <div>
              <h1>{movie.title}</h1>
              <p>Released: {movie.release_date}</p>
            </div>
          </Link>
        )
      })}
    </article>
  )
}

export default MovieList