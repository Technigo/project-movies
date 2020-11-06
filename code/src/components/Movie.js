import React from 'react'

import { IMAGE_URL } from './URLS'

import '../styles/movie.css'

/* TO FIX: poster-image should take up att space and have no whitespace */
export const Movie = ({ title, poster_path, release_date }) => {
  /* Where should I do this fetch? */

  return (
    <section className='movie__card'>
      <div className='movie__overlay'>
        <div className='movie__info-text'>
          <h2 className='movie__heading'>{title}</h2>
          <p className='movie__released'>Released {release_date}</p>
        </div>
      </div>
      <img src={`${IMAGE_URL}${poster_path}`} alt={title} />
    </section>
  )
}
