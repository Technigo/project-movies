import React, { useState, useEffect } from 'react';

import { MOVIEDB_URL } from '../components/url';
import { Movie } from '../components/Movie';

import './movielist.css';

export const MovieList = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(MOVIEDB_URL)
			.then((res) => res.json())
			.then((json) => setMovies(json.results));
	}, []);

	return (
		<section className="movielist__container">
			{movies.map((movie) => (
				<Movie key={movie.id} {...movie} />
			))}
		</section>
	);
};
