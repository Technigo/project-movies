import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Movie } from '../components/Movie.js'

import '../scss/moviedetails.scss'

export const MovieDetails = () => {

  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=00a26f8911994a10cd0aea2660d5417f&language=en-US&page=1`)
      .then(res => res.json())
      .then(json => setMovieDetails(json))
  }, [movieId])

  return (
    <>
      <Link to={'/'} className="back-btn">Movies</Link>
      <Movie movieDetails={movieDetails} />
    </>
  )
}