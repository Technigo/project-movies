import React from "react"
import { Link } from 'react-router-dom';

import Container from './styles/Container.styled'

const PopularList = ({ allMovies }) => {
  return (
    <Container>
      {allMovies.map((movie) => (
        <Link
          key={movie.id}
          to={`/movie/${movie.id}`}
          rel="noopener noreferrer"
        >
        <div className="movie-container">
          <img
            className="movie-img"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="movie poster"
          />
              <h2>{movie.original_title}</h2>
              <p>Release date:{movie.release_date}</p>
              </div>
        </Link>
      ))}
    </Container>
  )
}

export default PopularList
