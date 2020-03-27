import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])
  const apiKey = '85c8192ada23df0631c9cf9ca0b5729d'
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
        console.log(json)
      })
  }, [movieId])

  return (
    <div className="movie-detail-wrapper">
      <img className="movie-backdrop" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
      <img className="movie-detail-poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
      <h1 className="movie-title">{movie.title}</h1>
      <p className="movie-rating">{movie.vote_average}/10</p>
      <p className="movie-overview">{movie.overview}</p>
    </div>
  )
}