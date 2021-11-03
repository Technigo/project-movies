import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { DETAILS_URL } from '../utils/urls'

export const MovieDetails = () => {

	const { movieId } = useParams();
	const history = useHistory(); 

    const [details, setDetails] = useState([]);

	const goBack = () => {
		history.push("/")
	}
	
	useEffect(() => {
		fetch(DETAILS_URL(movieId))
		.then((res) => res.json())
		.then((json) => {
			setDetails(json)
		})
	},[movieId])

    return (
	<>
	<button onClick={goBack}>Go back</button>
	<article>
	{details && (
		<div>
		<h1>{details.title}</h1>
		<p>{details.overview}</p>
		<img src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} alt={details.title} />
    	<p>{details.vote_average}/10</p>
		<p>Release date: {details.release_date}</p>
      </div>
	)}
	</article>
	</>
    )
  }
