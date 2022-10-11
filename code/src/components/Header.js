import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <h1>
        <Link to="/">Logo</Link>
      </h1>

      <ul>
        <li>
          <NavLink to="/">List</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header;