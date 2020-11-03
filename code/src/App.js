import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MoviePage from './pages/MoviePage';
import CompanyList from './pages/CompanyList.js';
import Nav from './components/Nav';
import Error from './components/Error';

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

				<Route exact path="/error">
					<Error />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};
