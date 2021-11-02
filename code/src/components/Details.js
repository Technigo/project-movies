import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';

import { DETAILS_URL } from '../utils/urls';

import "../components/Details.css"


const Details = () => {
	const [details, setDetails] = useState({});

	const { movieID } = useParams();
	console.log((movieID));
	console.log(DETAILS_URL(movieID));

	useEffect(() => {
		fetch(DETAILS_URL(movieID))
			.then((res) => res.json())
			.then((data) => setDetails(data));
	}, [movieID]);


	const divStyle = {
		
	  };

	return( 
	<div className="detailsPage" style={divStyle}>
			<nav>
				<NavLink className="back-link" exact to="/" activeClassName="my-custom-class">
					Back
				</NavLink>
				</nav>
				<div className="background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>
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
