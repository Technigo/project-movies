import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BACKDROP_URL, POSTER_URL, API_MOVIE_URL } from 'utils/url'
import { BackIcon } from 'icons/BackIcon'
import 'components/movieDetails.css'

export const MovieDetails = () => {
  const [details, setDetails] = useState({})
  const { movieId } = useParams()

  useEffect(() => {
    fetch(API_MOVIE_URL(movieId))
      .then(res => res.json())
      .then(res => setDetails(res))
    console.log('useEffect')
  }, [movieId])

  console.log('details', details)

  return (
    <section
      className='details-backdrop'
      style={{ backgroundImage: `url(${BACKDROP_URL(details.backdrop_path)})` }}>
      <Link to='/' className='back-icon'>
        <BackIcon />
        <h2>Movies</h2>
      </Link>
      {/* <img className='details-backdrop' src={BACKDROP_URL(details.backdrop_path)} alt={details.title} /> */}
      <div className='details'>
        <img className='details-poster' src={POSTER_URL(details.poster_path)} alt={details.title} />
        <div className='details-info'>
          <div className='details-title-votes'>
            <h2>{details.title}</h2>
            <p className='votes'>{details.vote_average}/10</p>
          </div>
          <p>{details.overview}</p>
        </div>
      </div>
    </section>
  )
}
