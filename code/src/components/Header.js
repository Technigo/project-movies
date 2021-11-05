import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header>
        <nav> 
            <NavLink exact to="/"> LIST  </NavLink>
            <NavLink to="/MovieDetails"> DETAILS </NavLink>
        </nav>
    </header>
  );
};

export default Header;