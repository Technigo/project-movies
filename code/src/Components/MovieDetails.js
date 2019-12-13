import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const MovieDetails = () => {
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const apiKey = "34f303052aebcecccf74022a56b92eee"

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        setMovie(json)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <h1>LOADING</h1>
  }

  if (!movie) {
    return <h1>Movie not found</h1>
  }

  return <div>{movie && <div>{movie.title}</div>}</div>
}

export default MovieDetails