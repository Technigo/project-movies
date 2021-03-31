import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { MOVIES_URL } from 'reusable/urls'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect (() => {
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then ((data) => {
        setMovies(data.results)
      })
  }, [])

  return (
    <main className="main-container">
      {movies.map(movie => {
        return(
          <Link className="movie-card" to={`/movies/${movie.id}`} key={movie.id}>
            <div className='image-details'>
              <h1 className='movie-title'>{movie.original_title}</h1>
              <h2 className='released-date'>Released {movie.release_date}</h2>
            </div>
            <img className='image' src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`} alt="movie poster"/>
          </Link>
        )
      })}
    </main>
  )
}