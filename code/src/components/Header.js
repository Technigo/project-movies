import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <img src="../vs-movies.png" alt="Logo" />
      <nav>
        <Link to="/">Popular Movies</Link>
        <Link to="/genre-list">Genres</Link>
      </nav>
    </header>
  )
}