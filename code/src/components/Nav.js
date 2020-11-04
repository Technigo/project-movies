import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ onNavClick }) => {
  return (
    <header>
      <nav>
        <button className="nav-button">Category</button>
        <div className="nav-links">
          <NavLink
            to="/"
            className="nav-bar-NavLink"
            onClick={() => onNavClick('now_playing')}
          >
            Now Playing
          </NavLink>
          <NavLink
            to="/"
            className="nav-bar-NavLink"
            onClick={() => onNavClick('popular')}
          >
            Popular
          </NavLink>
          <NavLink
            to="/"
            className="nav-bar-NavLink"
            onClick={() => onNavClick('upcoming')}
          >
            Upcoming
          </NavLink>
          <NavLink
            to="/"
            className="nav-bar-NavLink"
            onClick={() => onNavClick('top_rated')}
          >
            Top Rated
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
