import React from 'react';
import 'styles/header.css';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <header>
      <h1 className="top-heading">MOVIES</h1>
      <nav>
        <NavLink to="/" exact className="nav-links">
          Now Playing
        </NavLink>
        <NavLink to="/toprated" className="nav-links">
          Top Rated Movies
        </NavLink>
      </nav>
    </header>
  );
};