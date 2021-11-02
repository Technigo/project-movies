import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DETAILS_URL } from '../utils/urls'
import "./MovieDetails.css"

const MovieDetails = () => {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState({})

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => setMovieDetails(data))
  }, [movieId])

  return (
    <>
      <div>
        <button>Return to Movielist</button>
        <h1>{movieDetails.title}</h1>        
      </div>
    </>
  )
}


export default MovieDetails