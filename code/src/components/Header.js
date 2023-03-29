import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="Header">
      <nav>

        <p>
          <NavLink to="/">
            <img className="home-btn " src="/logos/home.png" alt="home-button" />
          </NavLink>
        </p>
      </nav>
    </header>
  )
}

export default Header;