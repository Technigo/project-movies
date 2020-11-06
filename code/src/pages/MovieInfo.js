import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import './movieinfo.css';

export const MovieInfo = () => {
	const [movie, setMovie] = useState({});
	const [animatedText, setAnimatedText] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=1cd52a160617841675a7339879fe0ce3&language=en-US`
		)
			.then((res) => res.json())
			.then((data) => setMovie(data));
	}, [id]);

	//trying out React Spring for the button-text animation. Could have worked better!

	const animatedTextStyle = useSpring(
		{
			marginLeft: animatedText ? 10 : 5,
			duration: 0.5,
		},
		[]
	);

	const backdrop = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
	const moviePoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	return (
		<section
			className="movieinfo"
			style={{ backgroundImage: `url(${backdrop})` }}>
			<button
				onMouseOver={() => setAnimatedText((a) => !a)}
				onMouseLeave={() => setAnimatedText(null)}
				type="button">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
					<path
						d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z"
						fill="#fff"
						fillRule="evenodd"></path>
				</svg>
				<animated.h2 style={animatedTextStyle}>Movies</animated.h2>
			</button>
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
