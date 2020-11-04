import React, { useEffect, useState } from 'react'
import './MovieDetails.css'
import { useParams } from 'react-router-dom'
import { Icon } from './Icon.js'
import { Link } from 'react-router-dom'

export const MovieDetails = () => {

  const { id } = useParams()

  const DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=e2eb26a39cdd68b3570a5c1b62c9c638&language=en-US`
 
  const [details, setDetails] = useState([])

  useEffect (() => {
    fetch(DETAILS_URL)  
      .then((response) => response.json())
      .then((json) => setDetails(json))
  }, [id])

  console.log(details) // - don't forget to remove

  return (
    <section className='movie-details'style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${details.backdrop_path})`}}>
      <Link className='homepage-link' to='/'>
        <Icon/>
        <p className='link-title'>Movies</p>
      </Link>
      <div className='details-summary'>
        <img className="details-image" src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} alt={details.title}/>
        <div className ="details-text">
          <h2>{details.title}<span>{details.vote_average}/10</span></h2>
          <p>{details.overview}</p>
        </div>
      </div>
    </section>
  )
}