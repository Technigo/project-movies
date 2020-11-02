import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import '../styles/Nav.css';

const Nav = () => (
	<header>
		<Link to="/">
			<h1>Movie time</h1>
		</Link>

		<nav>
			<button className="nav-button">Category</button>
			<div className="nav-links">
				<NavLink to="/">Now Playing</NavLink>

				<NavLink to="/popular">Popular</NavLink>

				<NavLink to="/upcoming">Upcoming</NavLink>

				<NavLink to="/top_rated">Top Rated</NavLink>
			</div>
		</nav>
	</header>
);
export default Nav;
