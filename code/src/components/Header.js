/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'header.css';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-container" />
        <Link to="/">
          <img className="logo-image" src="../images/popcorn-logo.jpg" alt="Movie Page Logo" />
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h3 className="logo-title">MOVIE NIGHT</h3>
        </Link>
        <div />
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src="../images/burger-bar.png" alt="menu" style={{ width: 40, height: 40, backgroundColor: 'whitesmoke', borderRadius: 5 }} />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Popular</NavLink>
            </li>
            <li>
              <NavLink to="/upcoming">Upcoming</NavLink>
            </li>
            <li>
              <NavLink to="/tv">TV Series</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};
export default Header;
