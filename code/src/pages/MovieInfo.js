import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Button } from '../components/Button';

import './movieinfo.css';

export const MovieInfo = () => {
	const [movie, setMovie] = useState({});
	const { id } = useParams();

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=1cd52a160617841675a7339879fe0ce3&language=en-US`
		)
			.then((res) => res.json())
			.then((data) => setMovie(data));
	}, [id]);

	//trying out React Spring for the button-text animation. Could have worked better!

	const backdrop = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
	const moviePoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	return (
		<section
			className="movieinfo"
			style={{ backgroundImage: `url(${backdrop})` }}>
			<Button />
			<section className="movieinfo__container">
				<img src={moviePoster} alt="" />
				<article className="movieinfo__container__description">
					<section>
						<h1>
							{movie.title} <span>{movie.vote_average}/10</span>
						</h1>
					</section>
					<section>
						<p>{movie.overview}</p>
					</section>
				</article>
			</section>
		</section>
	);
};
