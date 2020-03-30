import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=00a26f8911994a10cd0aea2660d5417f&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => setMovieDetails(json))
  }, [movieId])

  return (
    <section className="movie" style={{ background: `url(https://image.tmdb.org/t/p/w1280/${movieDetails.backdrop_path})` }}>
      <img src={`https://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`} alt={`${movieDetails.title} Poster`} ></img>
      <h1>{movieDetails.title}</h1>
      <span>{movieDetails.vote_average}</span>
      <p>{movieDetails.overview}</p>
    </section >
  )
}