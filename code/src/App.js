import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Overview } from "components/Overview";
import { MovieDetails } from "components/MovieDetails";

export const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" render={() => <Overview />} />
				<Route path="/movies/:id" render={() => <MovieDetails />} />
			</Switch>
		</BrowserRouter>
	);
};
