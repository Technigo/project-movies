import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';

import { DETAILS_URL } from '../utils/urls';

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
		backgroundImage: 'url(https://image.tmdb.org/t/p/w1280'+ details.backdrop_path + ')'
	  };

	return( 
	<div className="details" style={divStyle}>{details.original_title}
			<nav>
				<NavLink exact to="/" activeClassName="my-custom-class">
					Back
				</NavLink>
				</nav>
	</div>
	);
};

export default Details;
