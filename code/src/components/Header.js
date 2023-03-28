import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <p>
          <NavLink to="/moviedetails">GO to MoviesDetails component</NavLink>
        </p>
        <p>
          <NavLink to="/">GO to Home page</NavLink>
        </p>
      </nav>
    </header>
  )
}