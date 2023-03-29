import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'header.css';

const Header = () => {
  return (
    <header>
      <Link to="/"><img className="logo-image" src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="Movie Page Logo" width="80" height="50" /></Link>

      <nav>
        <ul className="navlink-container">
          <li className="navlink">
            <NavLink to="/onCinema">Playiing Now</NavLink>
          </li>
          <li className="navlink">
            <NavLink to="/TV-series">TV Series</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header