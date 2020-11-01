import React from 'react';
import { Route, Link } from 'react-router-dom';

const Nav = () => (
	<header>
		<h1>Movie time</h1>
		<Route path="/movies">
			<Link to="/">
				<button type="button">Home</button>
			</Link>
		</Route>
	</header>
);
export default Nav;
