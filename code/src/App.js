import Movies from 'Component/Movies';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from 'Component/NavBar';
import Error from 'Component/Error';
import MovieDetail from 'Component/MovieDetail';

export const App = () => {
	const [selection, setSelection] = useState('popular');
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	const api_key = '16e2f0b0c955ae35c249c51b6faa99c0';
	/* const selection_URL = `https://api.themoviedb.org/3/movie/${selection}?api_key=${api_key}&language=en-US&page=1`; */

	useEffect(() => {
		setLoading(true);
		fetch(
			`https://api.themoviedb.org/3/movie/${selection}?api_key=${api_key}&language=en-US&page=1`
		)
			.then((response) => response.json())
			.then((data) => {
				setMovies(
					data.results.map((item) => ({
						id: item.id,
						title: item.title,
						date: item.release_date,
						description: item.overview,
						rating: item.vote_average,
						posterUrl: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
						backdropUrl: `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`,
					}))
				);
				setSelection(selection);
			})
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, [selection]);

	return (
		<Router>
			<nav>
				<NavBar value={selection} setSelection={setSelection} />
			</nav>
			<Routes>
				<Route
					exact
					path="/"
					element={<Movies loading={loading} movies={movies} />}
				/>
				<Route
					path="movies/:movieId"
					element={<MovieDetail movies={movies} />}
				/>
				<Route path="*" element={<Error />} />
			</Routes>
		</Router>
	);
};
