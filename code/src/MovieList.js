import React, { useState, useEffect } from 'react';

import { MOVIEDB_URL } from './url';
import { Movie } from './components/Movie';

export const MovieList = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(MOVIEDB_URL)
			.then((res) => res.json())
			.then((json) => setMovies(json.results));
	}, []);

	return (
		<section>
			{movies.map((movie) => (
				<Movie key={movie.id} {...movie} />
			))}
		</section>
	);
};
