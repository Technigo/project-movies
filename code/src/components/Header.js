/* eslint-disable linebreak-style */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1> Here will come header with navi </h1>
      <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/details"> Details </NavLink>
      </nav>
    </header>
  );
}

export default Header;
