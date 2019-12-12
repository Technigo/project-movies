import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../index.css"

export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=9d205e0f5fff6f5614be3be92179fc10&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => setMovies(json.results))
  }, [])

  return (
    <div className='container'>
      {movies.map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            className=''
          />
          <div className='movieTitle'>
            <h1>{movie.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  )
}
