import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MovieDetails = () => {
  // const params = useParams()
  const { movieTitle } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    // console.log(params.movieTitle)
    console.log(movieTitle)
  })

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <h1>{movieTitle}</h1>
      {/* <img className="poster-image" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${movieTitle} poster`} /> */}
      <button type="button" onClick={goBack}>Go back</button>
    </div>
  )
}

export default MovieDetails