import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';

import Nav from './components/Nav';
//import API key after

export const App = () => {
	// const [movies, setMovies] = useState([]);
	// const [movieDetail, setMovieDetail] = useState([]);

	// const ApiKey = '175ffd5710eba9b52b1d7f46de42a152';
	// const movieListURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US`;
	// //const movieDetailURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${ApiKey}&language=en-US`;

	// useEffect(() => {
	// 	fetchMovieList();
	// }, []);

	// const fetchMovieList = () => {
	// 	fetch(movieListURL)
	// 		.then(res => res.json())
	// 		.then(json => {
	// 			setMovies(json.results);
	// 			console.log(json.results);
	// 		});
	// };

	// const fetchMovieDetail = movieId => {
	// 	fetch(
	// 		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${ApiKey}&language=en-US`
	// 	)
	// 		.then(res => res.json())
	// 		.then(json => {
	// 			setMovieDetail(json);
	// 			console.log(json);
	// 		});
	// };

	return (
		<BrowserRouter>
			<Nav />
			<Switch>
				<Route exact path="/">
					<MovieList
					//movies={movies}
					/>
				</Route>
				<Route exact path="/movies/:movieId">
					<MovieDetail
					//movieDetail={movieDetail}
					//onMovieClick={fetchMovieDetail}
					/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};
