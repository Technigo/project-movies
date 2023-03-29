import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <p>
          <NavLink to="/moviedetails/test">GO to MoviesDetails component</NavLink>
        </p>
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
      </nav>
    </header>
  )
}