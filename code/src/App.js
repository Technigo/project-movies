import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList } from './pages/MovieList';
import { MovieDetail } from './pages/MovieDetail';
import { Director } from 'pages/Director';

export const App = () => {
	const [ director, setDirector ] = useState('');
	const [ directorName, setDirectorName ] = useState('');
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Director setDirector={setDirector} setDirectorName={setDirectorName} />
				</Route>
				<Route path={`/${director}/`} exact>
					<MovieList director={director} setDirector={setDirector} directorName={directorName} />
				</Route>
				<Route path={`/${director}/:movieId`}>
					<MovieDetail />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};
