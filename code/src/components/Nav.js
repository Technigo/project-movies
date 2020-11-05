import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import '../styles/Nav.css';

const Nav = ({ onLinkClick }) => {
	const [showBurger, setShowBurger] = useState(false);

	const showBurgerMenu = () => {
		setShowBurger(!showBurger);
	};

	const categories = [
		{
			category: 'Popular',
			path: 'popular',
		},
		{
			category: 'Now Playing',
			path: 'now_playing',
		},
		{
			category: 'Upcoming',
			path: 'upcoming',
		},
		{
			category: 'Top rated',
			path: 'top_rated',
		},
	];

	return (
		<header>
			<nav>
				<Link to="/" className="logo">
					<h1>Movie time</h1>
				</Link>
				<button className="nav-button" onClick={showBurgerMenu}>
					Category
				</button>
				<div className={showBurger ? 'open' : 'closed'}>
					{categories.map(category => {
						return (
							<>
								<NavLink
									to="/"
									key={category}
									className="nav-bar-link"
									onClick={() => {
										onLinkClick(`${category.path}`);
										showBurgerMenu();
									}}
								>
									{category.category}
								</NavLink>
							</>
						);
					})}
				</div>
			</nav>
		</header>
	);
};
export default Nav;
