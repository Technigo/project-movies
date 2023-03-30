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
			<div className="details">
				<img className="movie-poster" src={movie.posterUrl} alt="poster" />
				<div className="description">
					<h2 className="movie-title">{movie.title}</h2>
					<p className="movie-date">Released Date:{movie.date}</p>
					<p className="movie-description">{movie.description}</p>
				</div>
			</div>
		</div>
	);
};

export default MovieDetail;
