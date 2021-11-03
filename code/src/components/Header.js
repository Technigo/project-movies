import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
	return (
		<header>
			<nav>
				<NavLink exact to="/" activeClassName="active">
					Popular
				</NavLink>
				<NavLink to="/top-rated" activeClassName="active">
					Top Rated
				</NavLink>
				<NavLink to="/upcoming" activeClassName="active">
					Upcoming
				</NavLink>
				<NavLink to="/now-playing" activeClassName="active">
					Now Playing
				</NavLink>
			</nav>
		</header>
	);
};
