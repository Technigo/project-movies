import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MoviePage from './pages/MoviePage';
import CompanyList from './pages/CompanyList.js';
import Nav from './components/Nav';
import Error from './components/Error';

import './styles/MovieStyle.css';

export const App = () => {
	const [movieList, setMovieList] = useState();

	const handleClick = selectedList => {
		setMovieList(selectedList);
	};

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Nav onLinkClick={handleClick} />
					<MovieList>{movieList}</MovieList>
				</Route>

				<Route exact path="/movies/:movieId/">
					<MoviePage />
				</Route>

				<Route exact path="/company/:companyId">
					<CompanyList />
				</Route>

				<Route exact path="/error">
					<Error />
				</Route>

				<Redirect to="/error" />
			</Switch>
		</BrowserRouter>
	);
};
