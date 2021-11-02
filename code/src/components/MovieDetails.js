import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { DETAILS_URL } from '../utils/urls'

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

	console.log(details
		)

    return (
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
    )
  }

//  import React, { useEffect, useState } from 'react';
//import { useParams } from 'react-router-dom';

//import { DETAILS_URL } from '../utils/urls';

//const Details = () => {
//	const [details, setDetails] = useState({});

//	const { pokemonName } = useParams();

//	console.log(DETAILS_URL(pokemonName));

//	useEffect(() => {
//		fetch(DETAILS_URL(pokemonName))
//			.then((res) => res.json())
//			.then((data) => setDetails(data));
//	}, []);

//	return <div>{details.name}</div>;
//};

//export default Details;