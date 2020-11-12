import React from 'react';
import { NavLink } from 'react-router-dom';

import 'styles/header.css';

export const Nav = () => {

  return (
    <header>
      <h1 className="top-heading">MOVIES</h1>
      <nav>
        <NavLink to="/" exact className="nav-links">
          Now Playing
        </NavLink>
        <NavLink to="/toprated" className="nav-links">
          Top Rated
        </NavLink>
        <NavLink to="/upcoming" className="nav-links">
          Upcoming
        </NavLink>
        <NavLink to="/theme" className="nav-links">
          Choose movie by theme
        </NavLink>
      </nav>
    </header>
  );
};