import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Love for Leo</h1>
      <nav>
        <NavLink exact to="/" activeClassName="header-nav-active">
          Leos List
        </NavLink>
        <NavLink to="/movies" activeClassName="header__nav-active">
          Details
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
