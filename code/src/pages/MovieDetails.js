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
    <section className="movie">
      <h1>{movieDetails.title}</h1>
    </section>
  )
}