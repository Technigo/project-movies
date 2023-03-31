import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'header.css';

const Header = () => {
  return (
    <header className="header-top">
      <div className="logo-container">
        <Link to="/"><img className="logo-image" src="../images/popcorn-logo.jpg" alt="Movie Page Logo" /></Link>
        <Link to="/" style={{ textDecoration: 'none' }}><h3 className="logo-title">MOVIE NIGHT</h3></Link>
      </div>
      <nav>
        <ul className="navlink-container">
          <li className="navlink">
            <NavLink to="/">Popular</NavLink>
          </li>
          <li className="navlink">
            <NavLink to="/upcoming">Upcoming</NavLink>
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