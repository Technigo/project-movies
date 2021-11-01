import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Love for Leo</h1>
      <nav>
        <NavLink exact to="/" activeClassName="my-custom-class">
          List
        </NavLink>
        <NavLink to="/details" activeClassName="my-custom-class">
          Details
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
