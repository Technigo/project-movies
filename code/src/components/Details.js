import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import "./Details.css"

import { DETAILS_URL } from "../utils/urls"

const Details = () => {
  const [details, setDetails] = useState([])
  const { movieId } = useParams() //access parameters from the URL

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then(res => res.json())
      .then(data => setDetails(data))
  }, [movieId])
  console.log(details.poster_path)
  return (
    <div className='details'>
      <img className='backdrop' src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`} alt="backdrop" />
      <div className='details-wrapper'>
        <img className="movie-img" src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.title} />
        <div className='details-info'>
          <div className='details-title-votes white'>
            <h2>{details.title}</h2> <span className='rating'> <img className='star' src="/star.png" alt="rating" />{details.vote_average}</span>
            <p className='overview white'>{details.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;