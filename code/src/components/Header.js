import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/details/:movieId">Movie Details</Link>
        <Link to="/">Movie List</Link>
      </nav>
    </header>
  )
}