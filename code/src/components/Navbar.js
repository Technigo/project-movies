import React from "react";
import { NavLink } from 'react-router-dom';
import "../components/Navbar.css"
import BurgerMenu from './BurgerMenu';

//simple navbar with props
//by adding 'exact className' the / link isn't active all the time

const Navbar = (props) => {

	const menuItems = [
		{ to: "/", displayName: "Popular" },
		{ to: "/toprated", displayName: "Top Rated" },
		{ to: "/christmas", displayName: "Christmas" },
		{ to: "/halloween", displayName: "Halloween" }
	];
	return (
		<div className="navbar">
			<h1 className="header-welcome">{props.title}</h1>
			<BurgerMenu items={menuItems} />
			<div className="link-wrapper">
				{(
                   menuItems.map((item, index) => (
                            <NavLink key={index} to={item.to} exact className="navbar-links">
                                {item.displayName}
                            </NavLink>
                    ))
                )}
			</div>

		</div>
	);
};

export default Navbar;