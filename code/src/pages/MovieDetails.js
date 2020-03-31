import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import "./moviedetails.css"

export const MovieDetails = () => {
  const api_key = "bf1c38c5c54137f389c5c7971de1fe96"
  const { movieId } = useParams()
  const { movie, setMovie } = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json.results)
      })
  }, [movieId])

  return (
    <div>Move Details page</div>
  )
}