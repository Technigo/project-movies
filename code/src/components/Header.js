import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
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
        <p>
          <NavLink to="/">Go to Home</NavLink>
        </p>
      </nav>
    </header>
  )
}

export default Header;