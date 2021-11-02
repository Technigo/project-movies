import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "Navbar";
import Home from "Home";
import About from "About";
import Movie from "components/MovieDetail";
import NoPageFound from "NoPageFound";

export const App = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<div className="navbarContainer">
					<Navbar />
				</div>
				<Switch>

			
						<Route path="/" exact>
							<Home />
						</Route>

						<Route path="/about" exact>
							<About />
						</Route>

						<Route path="/movie/:title" exact>
							<Movie />
						</Route>



						<Route path='*' exact>

<NoPageFound />

</Route>

		

				

				</Switch>
			</div>
		</BrowserRouter>
	);
};
