import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
	const { movieId } = useParams();
	const [movieDetail, setMovieDetail] = useState([]);

	const ApiKey = '175ffd5710eba9b52b1d7f46de42a152';
	//const movieListURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US`;

	useEffect(() => {
		fetchMovieDetail(movieId);
	}, [movieId]);

	const fetchMovieDetail = movieId => {
		fetch(
			`https://api.themoviedb.org/3/movie/${movieId}?api_key=${ApiKey}&language=en-US`
		)
			.then(res => res.json())
			.then(json => {
				setMovieDetail(json);
				console.log(json);
			});
	};

	return (
		<section>
			<img
				src={`https://image.tmdb.org/t/p/w1280/${movieDetail.backdrop_path}`}
				alt={`${movieDetail.title}`}
			/>
			<h2>{movieDetail.title} </h2>
			<p>{movieDetail.vote_average}/10</p>
			<p>{movieDetail.overview}</p>
			<img
				src={`https://image.tmdb.org/t/p/w300${movieDetail.poster_path}`}
				alt={`${movieDetail.title}`}
			/>
		</section>
	);
};
export default MovieDetail;
// const MovieDetail = ({ onMovieClick, movieDetail }) => {
// 	const { movieId } = useParams();

// 	useEffect(() => {
// 		onMovieClick(movieId);
// 	}, []);

// 	return (
// 		<section>
// 			<img
// 				src={`https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path}`}
// 				alt={`${movieDetail.title}`}
// 			/>
// 			<h2>{movieDetail.title} </h2>
// 			<p>{movieDetail.vote_average}/10</p>
// 			<p>{movieDetail.overview}</p>
// 			<img
// 				src={`https://image.tmdb.org/t/p/w300${movieDetail.poster_path}`}
// 				alt={`${movieDetail.title}`}
// 			/>
// 		</section>
// 	);
// };
// export default MovieDetail;
