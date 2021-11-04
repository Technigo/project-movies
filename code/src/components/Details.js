import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { DETAILS_URL } from '../utils/urls';

import "../components/Details.css"


const Details = () => {
	const [details, setDetails] = useState({});

	const { movieID } = useParams();
	console.log((movieID));
	console.log(DETAILS_URL(movieID));

	const history = useHistory();

	useEffect(() => {
		fetch(DETAILS_URL(movieID))
			.then((res) => res.json())
			.then((data) => setDetails(data));
	}, [movieID]);

	const onButtonBackClick = () => {
		history.goBack();

	};

	const divStyle = {

	};


	return( 
	<div className="detailsPage" style={divStyle}>
		<i className="fas fa-chevron-circle-left"></i>
		<button className="back-btn" onClick={onButtonBackClick}>Movies</button>
		<div className="background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>      {/* <gradient to get black fading /> */}
			<div className="summary">
            <img src={`https://image.tmdb.org/t/p/w780${details.poster_path}`}  alt={details.title} />
            	<div className="details">
              	<h1>{details.original_title} <span className="rating">{details.vote_average}/10</span></h1>
              	<p>{details.overview}</p>
          		</div>
			</div>
		</div>
	</div>
	
	);
};

export default Details;
