import React from 'react';
import { MovieLists } from './pages/MovieLists'; //import MovieLists component
import { MovieDetails } from './pages/MovieDetails'; //import MovieDetails component
import { BrowserRouter, Switch, Route } from 'react-router-dom'; //import react route dom

export const App = () => {
	return (
		//Anything within browser router, we can start creating route
		<BrowserRouter>
			{/* When the first route is matched, the switch stops looking for route  */}
			<Switch>
				{/* Route for the homepage with the Movie list and one route for the Movie details */}
				<Route path="/" exact>
					<MovieLists />
				</Route>
				<Route path="/movie/:movieId">
					<MovieDetails />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

//Questions:

//why do we have data instead json.results in the details?
//What does a Param do?
