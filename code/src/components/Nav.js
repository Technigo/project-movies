import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <header>
    {/* <Link to="/">Home</Link> */}
    <nav>
      <button className="nav-button">Category</button>
      <div className="nav-links">
        <NavLink to="/" className="nav-bar-NavLink">
          Now Playing
        </NavLink>
        <NavLink to="/popular" className="nav-bar-NavLink">
          Popular
        </NavLink>
        <NavLink to="/upcoming" className="nav-bar-NavLink">
          Upcoming
        </NavLink>
        <NavLink to="/top_rated" className="nav-bar-NavLink">
          Top Rated
        </NavLink>
      </div>
    </nav>
  </header>
);

export default Nav;
