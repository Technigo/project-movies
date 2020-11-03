import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState([])

  const fetchMovieDetails = () => {
    const API_KEY = `625126cdbe1a2a3d2d941c58292f85ef`
    const MOVIE_DETAIL_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`

    fetch(MOVIE_DETAIL_URL)
      .then((response) => response.json())
      .then((json) => setMovie(json) )
  }

  useEffect(() => {
    fetchMovieDetails()
  }, )

  return (
    <article>
      <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title}/>
      <h1>{movie.original_title}</h1>
      <p>{movie.vote_average} / 10</p>
      <p>{movie.overview}</p>
    </article>
  )
}