import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Movie releases</h1>
      <nav>
        <p>
          <Link to="/details">Go to Details</Link>
        </p>
        <p>
          <Link to="/">Go to Home</Link>
        </p>
        <p>
          <NavLink to="/details">Go to Details</NavLink>
        </p>
      </nav>
    </header>
  )
}

export default Header;