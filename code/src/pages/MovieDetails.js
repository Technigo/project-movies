import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ce155d55b3ce81f17dbaf865fc989515&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setMovie(json)
      })
  }, [movieId])

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  )
}