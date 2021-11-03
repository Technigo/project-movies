import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {

    return (
	<header className="header">
		<nav>
			<NavLink exact to="/" > 
				HOME
			</NavLink>
		</nav>
	</header>
    );
  }
