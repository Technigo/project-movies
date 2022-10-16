import React from 'react';
import BackBtn from './BackBtn';
import { useParams } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
	const { movieId } = useParams();
	const movie = movies.filter((movie) => movie.id === Number(movieId))[0];

	return (
		<div className="details-container">
			<BackBtn />
			<img className="backdrop" src={movie.backdropUrl} alt="img" />
		</div>
	);
};

export default MovieDetail;
