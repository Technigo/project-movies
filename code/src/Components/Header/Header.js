import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from './flixlist_logo.png';

export const Header = () => {
  return (
    <header className="header-container">
      <Link to="/"><img className="flexlistlogo" src={logo} alt="logo" /></Link>
      <ul className="navlink-container">
        <li className="nav-links"> <NavLink to="/TopRated">Top Rated</NavLink></li>
        <li className="nav-links"> <NavLink to="/NowPlaying">Now Playing</NavLink></li>
        <li className="nav-links"> <NavLink to="/UpComing">Upcoming</NavLink></li>
      </ul>
    </header>
  )
}