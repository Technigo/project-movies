import React from 'react';
import { NavLink, Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">  Home </NavLink>
        <NavLink to="/details"> Details  </NavLink>
        <Link to="/404"> Not found </Link>
      </nav>
    </header>
  );
}
export default Header;
