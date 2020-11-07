import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import MovieDetail from '../components/MovieDetail';
import Loader from '../components/Loader';
import Error from '../components/Error';
import BackButton from '../components/BackButton';

const MoviePage = () => {
	const [movieDetail, setMovieDetail] = useState({});
	const [loading, setLoading] = useState(true);

	const { movieId } = useParams();

	const ApiKey = '175ffd5710eba9b52b1d7f46de42a152';
	const API_URL = `https://api.themoviedb.org
	/3/movie/${movieId}?api_key=${ApiKey}&language=en-US`;

	useEffect(() => {
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
	}, [movieId, API_URL]);

	return (
		<main>
			<BackButton text={'Back'} />
			{loading && <Loader />}
			{!loading && (
				<MovieDetail
					backdrop_path={movieDetail.backdrop_path}
					poster_path={movieDetail.poster_path}
					title={movieDetail.title}
					vote_average={movieDetail.vote_average}
					tagline={movieDetail.tagline}
					overview={movieDetail.overview}
					imdb_id={movieDetail.imdb_id}
					genres={movieDetail.genres}
					production_companies={movieDetail.production_companies}
				/>
			)}
		</main>
	);
};
export default MoviePage;
