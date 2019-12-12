import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fac0e6041f4464409ca2dd71e7e9d33c&language=en-US`
    )
      .then(res => res.json())
      .then(json => {
        setMovie(json)
      })
  }, [id])

  if (loading) {
    return <h1> Loading page</h1>
  }

  if (!movie) {
    return <h1>no movie</h1>
  }

  return (
    <div>
      {movie && <div>{movie.title}</div>}</div>
  )
}