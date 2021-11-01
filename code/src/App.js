import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { List } from "components/List";
import { Movie } from "components/Movie";

export const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" render={() => <List />} />
				<Route path="/movies/:id" render={() => <Movie />} />
			</Switch>
		</BrowserRouter>
	);
};
