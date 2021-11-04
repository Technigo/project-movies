import React from "react";
import "../components/Navbar.css"

//simple navbar with props

const Navbar = (props) => {

	return (
		<div className="navbar">
			<h1 className="header-welcome">{props.title}</h1>
		</div>
	);
};

export default Navbar;
