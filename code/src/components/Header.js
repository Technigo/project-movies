import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'

export const Header = () => {

    return (
	<header className="header">
		<nav className="nav-links">
			<NavLink to="/" > 
				<span role="img" aria-label="img">🍿</span>
				HOME PAGE
			</NavLink>
			<NavLink  to="/top_rated"  > 
				<span role="img" aria-label="img">🍿</span>
				TOP RATED MOVIES
			</NavLink>
		</nav>
	</header>
    );
  }
