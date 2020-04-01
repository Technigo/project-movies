import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BackLink } from '../components/BackLink.js'
import './moviedetails.css'

export const MovieDetails = () => {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const api_key = '0d6aca16f35de68455e54acc43915021'
  const detailsApiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`

  useEffect(() => {
    fetch(detailsApiUrl)
      .then((res) => res.json())
      .then((json) => {

        setMovieDetails(json)
      })
  }, [detailsApiUrl, movieId]
  )


  return (
    <div className='movie-details-container' style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), 
    url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`
    }}>
      <BackLink />
      <article className='movie-details'>
        <img src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt='movieposter' className='movie-poster' />
        <div className='movie-text'>
          <h1>{movieDetails.title} <span className='average-vote'>{movieDetails.vote_average}/10</span></h1>
          <p>{movieDetails.overview}</p>
        </div>
      </article>
    </div>
    // </div >
  )
}