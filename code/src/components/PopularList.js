import React from "react"
import { Link } from 'react-router-dom';

import './PopularList.css'

const PopularList = ({ allMovies }) => {
  return (
    <section className="popular-movies-wrapper">
      {allMovies.map((movie) => (
        <Link
          key={movie.id}
          to={`/movie/${movie.id}`}
          rel="noopener noreferrer"
        >
          <img
            className="movie-img"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="movie poster"
          />
          <div>
            <h2>{movie.original_title}</h2>
            <p>Release date:{movie.release_date}</p>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default PopularList
