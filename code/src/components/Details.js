import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
	}, []);

	return <div>{details.original_title}</div>;
};

export default Details;
