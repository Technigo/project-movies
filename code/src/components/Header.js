import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <p>
          <NavLink to="/details/test">Go to details</NavLink>
        </p>
        <p>
          <NavLink to="/">Go to Home</NavLink>
        </p>
      </nav>
    </header>
  );
};
