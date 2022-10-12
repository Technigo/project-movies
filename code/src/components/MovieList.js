import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({ movieList }) => {
  console.log(movieList)
  return (
    <div>
      {movieList.map((movie) => {
        return (
          <Link className="movies" key={movie.id} to={`/details/${movie.title}`}>
            <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt="Movie poster" />{movie.title}
          </Link>
        )
      })}
    </div>
  )
}

export default MovieList