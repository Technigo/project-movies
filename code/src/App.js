import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "pages/Navbar";
import Home from "pages/Home";
import About from "pages/About";
import MoviePage from "pages/MoviePage";

export const App = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Navbar />

				<Switch>

					<Route path="/" exact>
						<Home />
					</Route>

					<Route path="/pages/about" exact>
						<About />
					</Route>

					<Route  path="/pages/moviePage/:id" exact>
						<MoviePage />
					</Route>
          
				</Switch>
			</div>
		</BrowserRouter>
	);
};
