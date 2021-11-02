import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PopularOverview } from "components/PopularOverview";
import { LatestOverview } from "components/LatestOverview";
import { MovieDetails } from "components/MovieDetails";
import { Header } from "components/Header";

export const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/" render={() => <PopularOverview />} />
				<Route path="/movies/:id" render={() => <MovieDetails />} />
			</Switch>
		</BrowserRouter>
	);
};
