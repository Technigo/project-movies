import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MovieDetail from '../components/MovieDetail';
import Loader from '../components/Loader';
import Error from '../components/Error';
import BackButton from '../components/BackButton';
import '../styles/MovieDetails.css';

const MoviePage = () => {
	const [movieDetail, setMovieDetail] = useState({});
	const [loading, setLoading] = useState(true);

	const { movieId } = useParams();

	const ApiKey = '175ffd5710eba9b52b1d7f46de42a152';
	const API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${ApiKey}&language=en-US`;

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
				window.location.assign('/error');
			});
	};

	return (
		<main className="movie-detail">
			{/* <BackButton path={'/'} text={'Home'} /> */}
			<BackButton text={'Home'} />
			{loading && <Loader />}
			{!loading && <MovieDetail {...movieDetail} />}
		</main>
	);
};
export default MoviePage;
