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

  console.log(BACKGROUND_URL, details.backdrop_path)

  /* const movieDet = {
    backgroundImage: `url(${BACKGROUND_URL}${details.backdrop_path})`
  } */

  /* I'd like to display spoken_languages, need a map for that? */

  return (
    <section
      className='details__wrapper'
      style={
        details.backdrop_path === undefined
          ? { background: 'black' }
          : {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(${BACKGROUND_URL}${details.backdrop_path})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              height: '100vh',
              position: 'relative'
            }
      }
    >
      <div className='details__info-box'>
        {details.poster_path === undefined ? (
          <div>No image</div>
        ) : (
          <div className='details__image-container'>
            <img
              src={`${IMAGE_URL}${details.poster_path}`}
              alt={details.title}
            />
          </div>
        )}
        <div className='details__info-text'>
          <h2>{details.title}</h2>
          <p>
            <span>Rating</span>: {details.vote_average} /10
          </p>
          <h4>{details.tagline}</h4>
          <p>
            <span>Length:</span> {details.runtime} minutes
          </p>
          <p>
            <span>Plot:</span> {details.overview}
          </p>
        </div>
      </div>
    </section>
  )
}
