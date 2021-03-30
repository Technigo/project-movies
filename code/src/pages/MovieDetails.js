import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([])

  const {id} = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bf4522dc489e8ffdfd36be08819077b1&language=en-US`)
      .then(res => res.json())
      .then(json => setMovieDetails(json))
      .catch(err => console.err(err))
  },[])


  return (
    <p>{movieDetails.title}</p>
  )
}

