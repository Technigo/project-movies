import React, { useEffect, useState } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'


export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=b2d2d0205b4ac1ee806c10f3c7abcb87&language=en-US&page=1')
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.original_title} />

          {/*I had to wrapp <Link> in <BrowserRouter> to make it work, but that shouldn´t be necessary? It is wrapped in that tag in App.js?*/}
          <h2>

            <Link to={`/movie/${movie.id}`}>
              {movie.title}
            </Link>

          </h2>

        </div>
      ))}
    </div>
  )
}