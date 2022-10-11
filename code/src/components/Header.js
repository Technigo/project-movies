import React from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/MovieDetails"> Details </Link>
      </nav>
    </header>

  );
}