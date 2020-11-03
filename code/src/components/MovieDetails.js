import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './MovieDetails.css'

export const MovieDetails = () => {
  const { id } = useParams()
  const baseURL = 'https://api.themoviedb.org'
  const apiKey = '18fb720a795c179526f7b480bba674dd'
  const movieUrlDetails = `${baseURL}/3/movie/${id}?api_key=${apiKey}`
  //I need to change this API key to the correct one
  const [movieDetails, setMovieDetails] = useState([])

  useEffect(() => {
    fetch(movieUrlDetails)
      .then(response => response.json())
      .then(json => setMovieDetails(json))
  }, [movieUrlDetails])
  return (
    <section className='Movie-thumb'>
      <div className="background" 
      style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.5) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`,
      backgroundRepeat: 'no-repeat'}}>
      <img
        alt={movieDetails.title}
        className='detail-movie-img'
        src={`https://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`} />
    <h1>{movieDetails.title}</h1>
    <p>{movieDetails.overview}</p>
    <p>{movieDetails.vote_average}</p>
    </div>
    </section>
  )

}