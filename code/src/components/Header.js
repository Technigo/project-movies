import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav className="navBar">
        <ul><Link to="/details">Details</Link></ul>
        <ul><Link to="/">MovieList</Link></ul>
      </nav>
    </header>
  )
}