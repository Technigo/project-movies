import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { MovieList } from './pages/MovieList';
import { MovieInfo } from './pages/MovieInfo';
import { PageNotFound } from './PageNotFound';

export const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<MovieList />
				</Route>
				<Route path="/movies/:id" exact>
					<MovieInfo />
				</Route>
				<Route path="/404">
					<PageNotFound />
				</Route>
				<Redirect to="/404" />
			</Switch>
		</BrowserRouter>
	);
};
