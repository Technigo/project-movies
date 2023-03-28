import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/details/test">
          <p>Go to details</p>
        </NavLink>
        <NavLink to="/">
          <p>Go to home</p>
        </NavLink>
      </nav>
    </header>
  )
}