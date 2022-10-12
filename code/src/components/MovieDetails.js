import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MovieDetails = () => {
  // const params = useParams();
  const { movieTitle } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    // console.log(params.movieTitle)
    console.log(movieTitle)
  });

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <p>I am the Details comonent</p>
      <button type="button" onClick={goBack}>Go back</button>
    </div>
  )
}

export default MovieDetails