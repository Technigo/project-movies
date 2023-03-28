import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="Header">
      <nav>

        <p>
          <Link to="/">Go to Home</Link>
        </p>
        <p>
          <NavLink to="/MovieDetails/test">Go to Details</NavLink>
        </p>
        <p>
          <NavLink to="/">Go to Home</NavLink>
        </p>
      </nav>
    </header>
  )
}

export default Header;