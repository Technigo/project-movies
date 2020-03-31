import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList } from './pages/MovieList';
import { MovieDetail } from './pages/MovieDetail';
import { Director } from 'pages/Director';

export const App = () => {
	const [ director, setDirector ] = useState('');
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Director setDirector={setDirector} />
				</Route>
				<Route path={`/${director}/`} exact>
					<MovieList director={director} setDirector={setDirector} />
				</Route>
				<Route path={`/${director}/:movieId`}>
					<MovieDetail />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};
