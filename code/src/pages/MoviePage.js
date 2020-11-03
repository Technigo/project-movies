import React, { useState, useEffect } from 'react';
import { useParams, Link, Route } from 'react-router-dom';

//import Actor from '../components/MovieActors';
import MovieDetail from '../components/MovieDetail';
import Loader from '../components/Loader';
import Error from '../components/Error';
import BackButton from '../components/BackButton';
import '../styles/MovieDetails.css';

const MoviePage = () => {
	const [movieDetail, setMovieDetail] = useState({});
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	const { movieId } = useParams();

	//const [error, setError] = useState(false);
	//const history = useHistory(); //TO PUSH BACK TO MAIN IF WRONG ID ENTERED

	const ApiKey = '175ffd5710eba9b52b1d7f46de42a152';
	const API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${ApiKey}&language=en-US`;
	// const movieIdMatch = movies.find(movie => movie.movieId === movieId);

	// if (!movieIdMatch) {
	// 	history.push('/');
	// }

	useEffect(() => {
		fetchMovieDetail();
	}, [movieId]);

	const fetchMovieDetail = () => {
		fetch(API_URL)
			.then(res => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error('404');
				}
			})
			.then(json => {
				setMovieDetail(json);
				setLoading(false);
			})
			.catch(() => {
				//window.location.reload();
				window.location.assign('/error');
				console.log(error);
			});

		// fetch(
		// 	`https://api.themoviedb.org/3/movie/${movieId}?api_key=${ApiKey}&language=en-US`
		// )
		// 	.then(res => res.json())
		// 	.then(json => {
		// 		//console.log(json);

		// 		if (json.success === false) {
		// 			setError(true);
		// 			console.log(json);
		// 		} else {
		// 			setMovieDetail(json);
		// 			console.log(json);
		// 		}
		// 		setLoading(false);
		// 	});
	};

	return (
		<main className="movie-detail">
			<BackButton path={`/`} text="Home" />

			{loading && <Loader />}
			{error && <Error />}
			{!loading && !error && <MovieDetail {...movieDetail} />}
		</main>
	);
};
export default MoviePage;
