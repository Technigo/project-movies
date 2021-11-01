import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from "Navbar";
import Home from "Home";
import About from "About";


export const App = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<div className="navbarContainer">
				<Navbar />
</div>
				<Switch>
<div className="contentContainer">

					<Route path="/" exact>
					<Home />
					</Route>

					<Route path="/about" exact>
						<About />
					</Route>

          </div>
				</Switch>
			</div>
		</BrowserRouter>
	);
};
