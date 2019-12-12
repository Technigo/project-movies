import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const MovieDetail = () => {
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=9d205e0f5fff6f5614be3be92179fc10&language=en-US&page=1`
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
    return <h1>no movie</h1>
  }

  return <div>{movie && <div>{movie.title}</div>}</div>
}
