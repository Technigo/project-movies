import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/details">Details</Link>
        <Link to="/">Library</Link>
      </nav>
    </header>
  )
}

export default Header;