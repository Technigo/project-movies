import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList } from './pages/MovieList';
import { MovieDetail } from './pages/MovieDetail';
import { Director } from 'pages/Director';

export const App = () => {
	const [ directorName, setDirectorName ] = useState('');
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Director setDirectorName={setDirectorName}
					/>
				</Route>
				<Route path={`/:directorId/`} exact>
					<MovieList
					directorName={directorName}
					/>
				</Route>
				<Route path={`/:directorId/:movieId`}>
					<MovieDetail directorName={directorName}
					/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};
