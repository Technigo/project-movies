import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import './MoviesList.css'


const MOVIES_API = "https://api.themoviedb.org/3/movie/popular?api_key=a87d34281c8e1e04c49c6b1cfecbf6f0&language=en-US&page=1"

export const MoviesList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(MOVIES_API)
      .then(res => res.json())
      .then((json) => {
        setMovies(json.results)
      })
  }, [])

  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id} className="movies-list-content">
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} className="movies-list-img" />
          <div className="movie-details">
            <h2>{movie.title}</h2>
            <p>Released: {movie.release_date}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}