import React from 'react';
import { NavLink, Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <NavLink to="/">  Home </NavLink>
      <NavLink to="/details"> Details  </NavLink>
      <Link to="/404"> Not found </Link>
    </header>

  );
}
export default Header;
