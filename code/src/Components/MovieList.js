import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './movie-list.css'

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=078bf3a954eadf3e9528b49c2a6a9682&language=en-US&page=1')
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-poster">
          <Link to={`/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="poster-details">
              <h2>{movie.title}</h2>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}