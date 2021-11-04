import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { DETAILS_URL } from '../utils/urls';
import NotFound from './NotFound';
import Loader from './Loader';

import "../components/Details.css"


const Details = () => {
	const [details, setDetails] = useState();
	const [hasError, setHasError] = useState(false);
	const [loading, setLoading] = useState(true);

	const { movieID } = useParams();
	console.log((movieID));
	console.log(DETAILS_URL(movieID));

	const history = useHistory();

	useEffect(() => {
		fetch(DETAILS_URL(movieID))
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				if (data.id) {
				setDetails(data);
			}
				else {
					setHasError(true);
				}
				})

			.catch(() => setHasError(true));
	}, [movieID]);

	const onButtonBackClick = () => {
		history.goBack();

	};

	// Adds loader until the API is loaded. If the page isn't loaded the user is redirected to NotFound page 
	if (loading) {
		return <Loader />;

	} else if (hasError) {
			return <NotFound></NotFound>
		}

// Here we render the detail page with poster background with a summary and rating
	return( 
	<div className="detailsPage">
		<i className="fas fa-chevron-circle-left" onClick={onButtonBackClick}></i>
		<button className="back-btn" onClick={onButtonBackClick}>Movies</button>
		{details && (

		<div className="background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>      {/* <gradient to get black fading /> */}
			<div className="summary">
            <img src={`https://image.tmdb.org/t/p/w780${details.poster_path}`}  alt={details.title} />
            	<div className="details">
              	<h1>{details.original_title} <span className="rating">{details.vote_average}/10</span></h1>
              	<p>{details.overview}</p>
          		</div>
			</div>
		</div>
			)}
	</div>
	

	);
};

export default Details;
