import React from "react";
import { NavLink } from 'react-router-dom';
import "../components/Navbar.css"

//simple navbar with props

const Navbar = (props) => {

	return (
		<div className="navbar">
			<h1 className="header-welcome">{props.title}</h1>

			{/* <NavLink to="/toprated" className="nav-links">
          	Top Rated
        	</NavLink> */}

		</div>
	);
};

export default Navbar;
