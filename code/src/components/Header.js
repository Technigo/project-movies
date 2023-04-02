import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Link to="/"><img src="/vs-movies.png" alt="Logo" /></Link>
      <nav>
        <NavLink className="nav" to="/popular">POPULAR</NavLink>
        <NavLink className="nav" to="/genre-list">GENRES</NavLink>
        <span className="nav-line" />
        <NavLink className="nav nav-desktop left" to="/genre-list/18">DRAMA</NavLink>
        <NavLink className="nav nav-desktop" to="/genre-list/35">COMEDY</NavLink>
        <NavLink className="nav nav-desktop" to="/genre-list/53">THRILLER</NavLink>
        <NavLink className="nav nav-desktop" to="/genre-list/9648">MYSTERY</NavLink>
      </nav>
    </header>
  )
}