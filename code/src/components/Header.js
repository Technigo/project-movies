import React from 'react';
import { NavLink, Link } from 'react-router-dom';

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
      <p className="options">
        <Link to="/"><h1>New Releases</h1></Link>
        <Link to="/top-rated"> <h1>Top Rated Movies</h1></Link>
        {/* <Link to="/upcoming"><h1>Upcoming</h1></Link> */}
      </p>
    </header>
  )
}

export default Header;