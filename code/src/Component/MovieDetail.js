import React from 'react';
import BackBtn from './BackBtn';
import { useParams } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
	return (
		<div className="details-container">
			<BackBtn />
		</div>
	);
};

export default MovieDetail;
