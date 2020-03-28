import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const { movieId } = useParams()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=01c5831a9741275652de4ceff9c6e22f&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json)
      })
  }, [movieId])

  return (
    <div>
      <h2>{original_title}</h2>
    </div>
  )
}