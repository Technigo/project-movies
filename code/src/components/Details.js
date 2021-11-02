import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { MOVIE_URL } from "utils/urls"

const Details = () => {
  const [movie, setMovie] = useState([])

  const { movieId } = useParams()

  useEffect(() => {
    fetch(MOVIE_URL(movieId))
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }, [MOVIE_URL])

  return (
    <>
      <h2>{movie.original_title}</h2>
      <p>{movie.vote_average}</p>
      <div>
        {movie.overview}
        <img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
    </>
  )
}

export default Details
