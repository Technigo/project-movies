import React from "react";
import { NavLink } from 'react-router-dom';
import "../components/Navbar.css"

//simple navbar with props
//by adding 'exact className' the / link isn't active all the time

const Navbar = (props) => {

	return (
		<div className="navbar">
			<h1 className="header-welcome">{props.title}</h1>

		<div className="link-wrapper">
			<NavLink to="/" exact className="navbar-links"> 
          	Popular
        	</NavLink>

			<NavLink to="/toprated" className="navbar-links">
          	Top Rated
        	</NavLink>

			<NavLink to="/christmas" className="navbar-links">
          	Christmas
        	</NavLink>

			<NavLink to="/halloween" className="navbar-links">
          	Halloween
        	</NavLink>
		</div>

		</div>
	);
};

export default Navbar;
