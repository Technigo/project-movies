import React from 'react';
import { MovieLists } from './pages/MovieLists'; //import MovieLists component
import { MovieDetails } from './pages/MovieDetails'; //import MovieDetails component
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'; //import react route dom
import NotFound from './pages/NotFound'; //import NotFound component

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
				<Route path="/404"  >
				<NotFound/>
				</Route>
				{/* Redirect the user to the 404 path */}
				<Redirect to="/404"/> 
			</Switch>
		</BrowserRouter>
	);
};

//To-do list
//add some more comments
//Install prettier
//Meta tags
//add read me



//Question for teamsession
// Movie title and release date made white
//Grid on similar movies WHY DOES IT NOT WORK?




