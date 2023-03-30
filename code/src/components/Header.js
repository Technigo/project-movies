import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Popular Movies</Link>
        <Link to="/genre-list">Genres</Link>
      </nav>
    </header>
  )
}