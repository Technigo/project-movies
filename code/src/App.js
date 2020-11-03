import React from 'react';
//import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MoviePage from './pages/MoviePage';
import CompanyList from './pages/CompanyList.js';
import Nav from './components/Nav';
//import API key after

export const App = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Switch>
				<Route exact path="/movies/:movieId">
					<MoviePage />
				</Route>

				<Route exact path="/company/:companyId">
					<CompanyList />
				</Route>

				<Route exact path="/">
					<MovieList />
				</Route>

				<Route exact path="/popular">
					<MovieList>popular</MovieList>
				</Route>
				<Route exact path="/upcoming">
					<MovieList>upcoming</MovieList>
				</Route>
				<Route exact path="/top_rated">
					<MovieList>top_rated</MovieList>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

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
