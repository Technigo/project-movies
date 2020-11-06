import React, { useState, useEffect } from 'react';

import MovieThumb from '../components/MovieThumb';
import Error from '../components/Error';
import Loader from '../components/Loader';

const MovieList = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	const ApiKey = '175ffd5710eba9b52b1d7f46de42a152';
	//props.children used to display whatever included between the opening and closing tag when invoking a component
	const API_URL = `https://api.themoviedb.org	/3/movie/${
		children ? children : 'now_playing'
	}?api_key=${ApiKey}&language=en-US`;

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
				setMovies(json.results);
				setLoading(false);
			})
			.catch(() => {
				window.location.assign('/error');
			});
	}, [API_URL]);

	return (
		<main className="list">
			{loading && <Loader />}
			{!loading && (
				<>
					{movies.map(movie => (
						<MovieThumb
							key={movie.id}
							id={movie.id}
							poster_path={movie.poster_path}
							title={movie.title}
							release_date={movie.release_date}
						/>
					))}
				</>
			)}
		</main>
	);
};
export default MovieList;
