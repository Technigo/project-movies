import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-items-container">
        <h2> Welcome to the Movies Page</h2>
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
      </nav>
    </header>)
}

export default Header;