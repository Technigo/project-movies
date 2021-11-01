import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { List } from "components/list";

export const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" render={() => <List />} />
			</Switch>
		</BrowserRouter>
	);
};
