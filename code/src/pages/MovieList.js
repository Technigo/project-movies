import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './movielist.css'
import { MovieCardDetails } from 'components/MovieCardDetails'



export const MovieList = () => {
  const [movies, setMovies] = useState([])
  const apiKey = '85c8192ada23df0631c9cf9ca0b5729d'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
        console.log(movies)
      })
  })
  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`}>
          <article className="movie-card" key={movie.id}>
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />
            <MovieCardDetails
              title={movie.title}
              release_date={movie.release_date} />
          </article>
        </Link>
      ))}
      trdt
    </div>
  )
}