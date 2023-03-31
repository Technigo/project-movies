import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Link to="/"><img src="../vs-movies.png" alt="Logo" /></Link>
      <nav>
        <NavLink to="/">POPULAR</NavLink>
        <NavLink to="/genre-list">GENRES</NavLink>
        <NavLink className="nav-desktop left" to="/genre-list/18">DRAMA</NavLink>
        <NavLink className="nav-desktop" to="/genre-list/35">COMEDY</NavLink>
        <NavLink className="nav-desktop" to="/genre-list/53">THRILLER</NavLink>
      </nav>
    </header>
  )
}