import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import '../styles/Nav.css';

const Nav = () => (
	<header>
		<Link to="/">
			<h1>Movie time</h1>
		</Link>

		<Route path="/movies">
			<Link to="/">
				<button type="button" className="back-button">
					Home
				</button>
			</Link>
		</Route>
		<nav>
			<ul>
				<li>
					<NavLink to="/" className="nav-bar-NavLink">
						Now Playing
					</NavLink>
				</li>

				<li>
					<NavLink to="/popular" className="nav-bar-NavLink">
						Popular
					</NavLink>
				</li>

				<li>
					<NavLink to="/upcoming" className="nav-bar-NavLink">
						Upcoming
					</NavLink>
				</li>

				<li>
					<NavLink to="/top_rated" className="nav-bar-NavLink">
						Top Rated
					</NavLink>
				</li>
			</ul>
		</nav>
	</header>
);
export default Nav;
