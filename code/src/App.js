import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { MovieList } from './MovieList';
import { MovieInfo } from './pages/MovieInfo';

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
			</Switch>
		</BrowserRouter>
	);
};
