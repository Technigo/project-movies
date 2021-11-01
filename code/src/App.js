import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from "Navbar";
import Home from "Home";
import About from "About";
import MoviePage from "MoviePage";

export const App = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Navbar />

				<Switch>

					<Route path="/" exact>
						<Home />
					</Route>

					<Route path="/about" exact>
						<About />
					</Route>

					<Route  path="/moviePage/:id" >
						<MoviePage />
					</Route>
          
				</Switch>
			</div>
		</BrowserRouter>
	);
};
