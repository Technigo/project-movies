import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './movieDetails.css'

export const MovieDetails = (props) => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState({})
  // Fetch data from movie database
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=1a381f2cdba45c6f12c9451edcfa9c50&language=en-US`)
      .then(response => response.json())
      .then(json => setMovie(json))
  }, [movieId])

  return (
    <article className="movie-details" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }} >
      <nav className="movie-navigation">
        <Link to="/">
          Movies
        </Link>
      </nav>
      <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
      <h1 className="movie-title">{movie.title} <span className="movie-rating">{movie.vote_average}/10</span></h1>
      <p className="movie-synopsis">{movie.overview}</p>
    </article >
  )
}