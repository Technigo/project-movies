import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { DETAILS_URL, IMAGE_URL, BACKGROUND_URL } from '../components/URLS'

import '../styles/moviedetails.css'

export const MovieDetails = () => {
  const [details, setDetails] = useState({})
  const { movieId } = useParams()

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setDetails(data)
      })
  }, [movieId])


  /* I'd like to display spoken_languages, need a map for that? */

  return (
    <section className='details__wrapper'
    style={{backgroundImage:`url(${BACKGROUND_URL + details.backdrop_path})`}}>
      <div className='details__info-box'>
        <img src={`${IMAGE_URL}${details.poster_path}`} alt={details.title} />
        <div className='details__info-text'>
          <h2>{details.title}</h2>
          <h4>{details.tagline}</h4>
          <p>
            <span>Length:</span> {details.runtime} minutes
          </p>
          <p>
            <span>Plot:</span> {details.overview}
          </p>
          <p>
            <span>Rating</span>: {details.vote_average} /10
          </p>
        </div>
      </div>
    </section>
  )
}
