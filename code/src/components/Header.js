import React from 'react'
import { NavLink } from 'react-router-dom'

import './header.css'

export const Header = () => {

    return (
	<header className="header">
		<nav className="nav-links">
			<NavLink exact to="/" > 
				<span role="img" aria-label="img">🍿</span>
				HOME PAGE
			</NavLink>
			<NavLink exact to="/" > 
				<span role="img" aria-label="img">🍿</span>
				ANOTHER PAGE
			</NavLink>
			<NavLink exact to="/" > 
				<span role="img" aria-label="img">🍿</span>
				MORE MOVIES
			</NavLink>
		</nav>
	</header>
    );
  }
