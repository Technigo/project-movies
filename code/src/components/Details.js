import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { DETAILS_URL } from '../utils/urls'
import Button from './Button'

const GoBackButton = styled.button`
  color: black;
	background-color: red;
`

const Details = () => {
  const [details, setDetails] = useState({})
	const [error, setError] = useState(false)

  const { movie_id } = useParams()
	console.log(movie_id)
	const history = useHistory()

	useEffect(() => {
		fetch(DETAILS_URL(movie_id))
		.then((res) => res.json())
		.then((data) => {
			if (data.id) {
				setDetails(data)
			} else {
				setError(true)
			}
			})
			.catch(() => setError(true))
		}, [movie_id])


	// useEffect(() => {
	// 	fetch(DETAILS_URL(movie_id))
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			// if (data.id) {
	// 				setDetails(data)
	// 		// 	} else {
	// 		// 		setError(true)
	// 		// 	}
	// 		// })
	// 		// .catch(() => setError(true))
	//   }, []) 	
  // })

	const onButtonBackClick = () => {
		// history.goBack()
		history.push('/')
	}

	if (error) {
		return(
		<div>
		  <GoBackButton onClick={onButtonBackClick}>Go back</GoBackButton>
		  <h2>No such movie!</h2>
	  </div>
		)
	}

  return (
	  <div className="details-container">
		  <Button onClick={onButtonBackClick}/>
		  <img className="small-movie-poster" src={`https://image.tmdb.org/t/p/w300${details.poster_path}`} alt={details.title} />
		  <img className="background-poster" src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} alt={details.title}/>
			{/* <GoBackButton onClick={onButtonBackClick}>Go back</GoBackButton> */}
	  </div>
	)
}

export default Details