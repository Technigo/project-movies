import React, { useState, useEffect } from 'react';

//import { Link } from 'react-router-dom';
import MovieThumb from '../components/MovieThumb';
import Error from '../components/Error';
import Loader from '../components/Loader';

import '../styles/MovieList.css';

const MovieList = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	const ApiKey = '175ffd5710eba9b52b1d7f46de42a152';
	//const movieListURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US`;
	const API_URL = `https://api.themoviedb.org/3/movie/${
		children ? children : 'now_playing'
	}?api_key=${ApiKey}&language=en-US`;

	// 	The React docs say that you can use props.children on
	//components that represent ‘generic boxes’ and that ‘don’t know their children ahead of time’.
	//For me, that didn’t really clear things up.
	//I’m sure for some, that definition makes perfect sense but it didn’t for me.
	// My simple explanation of what this.props.children does is that it is used
	//to display whatever you include between the opening and closing tags when invoking a component.

	useEffect(() => {
		fetchMovieList();
	}, [API_URL]);

	const fetchMovieList = () => {
		fetch(API_URL)
			.then(res => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error('404');
				}
			})
			.then(json => {
				setMovies(json.results);
				setLoading(false);
			})
			.catch(() => {
				//window.location.reload();
				window.location.assign('/error');
				console.log(error);
			});

		// .then(res => res.json())
		// .then(json => {
		// 	console.log(json);
		// 	setMovies(json.results);
		// 	setLoading(false);
		// if (json.status_code === 34 || json.status_code === 404) {
		// 	setError(true);
		// 	console.log(json);
		// } else {
		// 	setMovies(json.results);
		// 	console.log(json);
		// }

		//});
	};

	return (
		<main className="movie-list">
			{loading && <Loader />}
			{error && <Error />}
			{!loading && !error && (
				<>
					{movies.map(movie => (
						<MovieThumb key={movie.id} {...movie} />
					))}
				</>
			)}
		</main>
	);
};
export default MovieList;
