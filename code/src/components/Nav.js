import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import '../styles/Nav.css';

const Nav = ({ onLinkClick }) => {
	const [showBurger, setShowBurger] = useState(false);

	const showBurgerMenu = () => {
		setShowBurger(!showBurger);
	};

	return (
		<header>
			<nav>
				<Link to="/">
					<h1>Movie time</h1>
				</Link>
				<button className="nav-button" onClick={showBurgerMenu}>
					Category
				</button>
				<div className={showBurger ? 'open' : 'closed'}>
					<NavLink
						to="/"
						className="nav-bar-link"
						onClick={() => {
							onLinkClick('now_playing');
							showBurgerMenu();
						}}
					>
						Now Playing
					</NavLink>
					<NavLink
						to="/"
						className="nav-bar-link"
						onClick={() => {
							onLinkClick('popular');
							showBurgerMenu();
						}}
						// onClick={() => onLinkClick('popular')}
						//onClick={() => showBurgerMenu(showBurger)}
					>
						Popular
					</NavLink>
					<NavLink
						to="/"
						className="nav-bar-link"
						onClick={() => {
							onLinkClick('upcoming');
							showBurgerMenu();
						}}
						//onClick={() => onLinkClick('upcoming')}
						//onClick={() => showBurgerMenu(showBurger)}
					>
						Upcoming
					</NavLink>
					<NavLink
						to="/"
						className="nav-bar-link"
						onClick={() => {
							onLinkClick('top_rated');
							showBurgerMenu();
						}}
						//onClick={() => onLinkClick('top_rated')}
						//onClick={() => showBurgerMenu(showBurger)}
					>
						Top Rated
					</NavLink>
				</div>
			</nav>
		</header>
	);
};
export default Nav;
