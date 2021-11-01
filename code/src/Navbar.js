import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<div className="navbarContainer">
				<ul>
					<li>
						<NavLink to="/"> Home </NavLink>
					</li>

					<li>
						<NavLink to="/about"> About </NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
