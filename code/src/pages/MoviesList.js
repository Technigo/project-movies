import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navigation } from 'components/Navigation/Navigation'
import './MoviesList.css'

export const MoviesList = (props) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const apiUrl = `https://api.themoviedb.org/3/movie/${props.children ? props.children : 'popular'}?api_key=c911a6ca19197e66eda27f627cd60e15&language=en-US&page=1`

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
        setLoading(false)
      })
  }, [apiUrl])

  return (
    <div className="movies-container">
      <Navigation />
      <div className="movies">
        {loading && <h3>Our stars are on their way!!</h3>}
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
            <div className="details">
              <h1>{movie.title}</h1>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
