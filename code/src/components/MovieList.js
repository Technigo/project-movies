import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const MovieList = () => {
  const MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=e644b2b8739cf7b05450ed105d6749a6&language=en-US&page=1'
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(MOVIES_URL)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.results)
        // fetching data throw setMovies from the API by getting an array from json.results about different movies and information about them. 
      })
  }, [])

  return (
    <>
      <section className="movie-list">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-section">
            <Link
              key={movie.id}
              to={`/movies/${movie.id}`}>
              <img
                className="-movies-background-img"
                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                alt={movie.title} />
            </Link>
            <div className="movie-text">
              <h1>{movie.title}</h1>
              <h2>Released {movie.release_date}</h2>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}