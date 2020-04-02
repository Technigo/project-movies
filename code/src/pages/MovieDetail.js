import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton } from 'components/BackButton';
import './moviedetail.css';

export const MovieDetail = (
	{ directorName }
	) => {
	const { directorId, movieId } = useParams();
	const [ movieInfo, setMovieInfo ] = useState([]);

	useEffect(
		() => {
			fetch(
				`https://api.themoviedb.org/3/movie/${movieId}?api_key=3506f645d143411491b3a1c8d00f1217&language=en-US`
			)
				.then((res) => res.json())
				.then((json) => {
					setMovieInfo(json);
				});
		},
		[ movieId ]
	);

	return (
		<section className="wrapper-for-details">
			<BackButton path={`/${directorId}/`} text={`Back to ${directorName}`} />
			<div
				className="movie-detail-container"
				style={{
					backgroundImage  : `linear-gradient(rgba(0, 0, 0, 0) -10%, rgb(0, 0, 0) 50%), url(https://image.tmdb.org/t/p/w1280${movieInfo.backdrop_path})`,
					backgroundRepeat : 'no-repeat',
					backgroundSize   : 'cover'
				}}
				key={movieInfo.id}
			>
				<div className="movie-detail-all-info">
					<img
						className="img-poster-detail"
						src={`https://image.tmdb.org/t/p/w342${movieInfo.poster_path}`}
						alt={`${movieId.original_title} poster`}
					/>
					<div className="movie-detail-text">
						<h1>
							{movieInfo.original_title} <span className="movie-rating">{movieInfo.vote_average}/10</span>
						</h1>
						<p>{movieInfo.overview}</p>
					</div>
				</div>
			</div>
		</section>
	);
};
