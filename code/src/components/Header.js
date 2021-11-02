import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
	return (
		<header>
			<nav>
				<NavLink exact to="/" activeClassName="active">
					Popular
				</NavLink>
				<NavLink to="/latest" activeClassName="active">
					Latest
				</NavLink>
				<NavLink to="/upcoming" activeClassName="active">
					Upcoming
				</NavLink>
			</nav>
		</header>
	);
};
