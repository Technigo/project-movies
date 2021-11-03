import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { DETAILS_URL } from '../utils/urls'
import './movieDetails.css'

export const MovieDetails = () => {

	const { movieId } = useParams()
  const [details, setDetails] = useState([])
	
	useEffect(() => {
		fetch(DETAILS_URL(movieId))
		.then((res) => res.json())
		.then((json) => {
			setDetails(json)
		})
	},[movieId])

	
    return (
  <section>
      <div
        className="background-container"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})`,
        }}
      >
	<article className="info">
	{details && (
		<div className="details-overall">
      <img className="poster" src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} alt={details.title} />
      <h1 className="detail-title">{details.title}
      <span className="detail-rating"> {details.vote_average}/10</span>
      </h1>
		  <p className="overview">{details.overview}</p>
		  <p className="details">Release date: {details.release_date}</p>
    </div>
    
	)}
  
	</article>
  </div>
  </section>
    )
  }
