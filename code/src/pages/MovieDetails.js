import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { DETAILS_URL, IMAGE_URL, BACKGROUND_URL } from '../components/URLS'
import { Nav } from '../components/Nav'

import '../styles/moviedetails.css'

export const MovieDetails = () => {
  const [details, setDetails] = useState({})
  const { movieId } = useParams()

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
      })
  }, [movieId])

  const generateRateClass = () => {
    if (details.vote_average < 3) {
      return 'details__low-rating'
    } else if (details.vote_average < 7) {
      return 'details__medium-rating'
    } return 'details__high-rating'
  }

  return (
    <main className='main__grid'>
      <Nav />
      <section
        className='details__background'
        style={
          details.backdrop_path === undefined
            ? { background: 'black' }
            : {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(${BACKGROUND_URL}${details.backdrop_path})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              /* backgroundAttachment: 'fixed',
              position: 'relative' */
            }
        }
      >
        <div className='details__info-box'>
          {details.poster_path === undefined ? (
            <div>No image</div>
          ) : (
              <div className='details__img-container'>
                <img
                  src={`${IMAGE_URL}${details.poster_path}`}
                  alt={details.title}
                />
              </div>
            )}
          <div className='details__info-text'>
            <h2>{details.title}</h2>
            <p>
              <span>Rating</span>: <span className={generateRateClass()}>{details.vote_average}</span>/10
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
    </main>
  )
}
