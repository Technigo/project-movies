import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-spinners-css';

import { MOVIEDB_URL } from '../components/url';
import { Movie } from '../components/Movie';

import './movielist.css';

export const MovieList = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(MOVIEDB_URL)
			.then((res) => res.json())
			.then((json) => {
				setLoading(false);
				setMovies(json.results);
			});
	}, []);

	return (
		<section className="movielist__container">
			{loading && <Spinner />}
			{movies.map((movie) => (
				<Movie key={movie.id} {...movie} />
			))}
		</section>
	);
};
