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

	const onButtonBackClick = () => {
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
		<main className='posterBackground' style={{ 
      backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` 
    }}>
      <div className="detailsContainer" >
		    <Button onClick={onButtonBackClick}/>
				<div className="movieDetailsContainer">
					<img className="smallMoviePoster" src={`https://image.tmdb.org/t/p/w300${details.poster_path}`} alt={details.title} />
				  <h2>{details.title}</h2>
				</div>
			{/* <GoBackButton onClick={onButtonBackClick}>Go back</GoBackButton> */}
	    </div>
		</main>
	)
}

export default Details