import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'header.css';

const Header = () => {
  return (
    <header className="header-top">
      <Link to="/"><img className="logo-image" src="../images/popcorn-logo.jpg" alt="Movie Page Logo" /></Link>
      <h3>Movie-night!</h3>
      <nav>
        <ul className="navlink-container">
          <li className="navlink">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navlink">
            <NavLink to="/upcoming">Upcoming Movies</NavLink>
          </li>
          <li className="navlink">
            <NavLink to="/tv">TV Series</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header