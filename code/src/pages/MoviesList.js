import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const MoviesList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=ef0fb1aeba7a73c8909c5037c23fc608&language=en-US&page=1')
    .then((res) => res.json())
    .then((json) => {
      setMovies(json.results)
    })

  }, [])

  return (
    <div>
      {movies.map((movie) =>(
        <div key={movie.id}>
          <Link to={`/movieInfo/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} />
            <h2>{movie.original_title}</h2>
            <p>Released {movie.release_date}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}