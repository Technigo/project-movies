import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <NavLink to="/tvseries">TV-serise</NavLink>
        </p>
        <p>
          <NavLink to="/upcoming">Upcoming</NavLink>
        </p>
      </nav>
    </header>
  )
}