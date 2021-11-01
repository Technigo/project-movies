import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<li>
				<Link to="/page/"> Home </Link>
			</li>
			<li>
				<Link to="/pages/about"> About </Link>
			</li>
		</div>
	);
};

export default Navbar;
