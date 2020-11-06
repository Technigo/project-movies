import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { PageNotFound } from './PageNotFound'
import { Footer } from 'components/Footer'

import './MovieDetails.css'


export const MovieDetails = () => {
  const { id } = useParams()
  const baseURL = 'https://api.themoviedb.org'
  const apiKey = '18fb720a795c179526f7b480bba674dd'
  const movieUrlDetails = `${baseURL}/3/movie/${id}?api_key=${apiKey}`
  //I need to change this API key to the correct one
  const [movieDetails, setMovieDetails] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(movieUrlDetails)
      .then(response => response.json())
      .then(json => {
        setMovieDetails(json)
        setLoading(false)
      })
  }, [movieUrlDetails])

  if (loading) {
    return (
      <div className='loading-page'>
        <div className='loader'></div>
        <p>Loading epic mustache movie...</p>
      </div>
    )
  }

  if (!movieDetails.title) {
    return (
      <PageNotFound message={movieDetails.status_message} />
    )
  }

  return (
    <>
    <section className='movie-thumb-wrapper'
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.5) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`
        }}>
        <div className='details-wrapper'>
          <img
            alt={movieDetails.title}
            src={`https://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`} />
          <div className='detail-text-wrapper'>
            <h1 className='movie-title'>{movieDetails.title}</h1>
            <p className='movie-details-vote'>Rating: {movieDetails.vote_average}/10</p>
            <p className='movie-details-overview'>{movieDetails.overview}</p>
          </div>
        </div>
    </section>
    <Footer />
    </>
  )
}