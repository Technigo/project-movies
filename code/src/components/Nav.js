import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = ({ onClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  const onMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <Link to="/">
        <h1>CinemaTech</h1>
      </Link>
      <nav>
        <button className="nav-button" onClick={onMenuClick}>
          Category
        </button>
        <div className={showMenu ? 'open' : 'closed'}>
          <NavLink
            to="/"
            className="nav-bar-NavLink"
            onClick={() => {
              onClick('now_playing');
              onMenuClick();
            }}
          >
            Now Playing
          </NavLink>
          <NavLink
            to="/"
            className="nav-bar-NavLink"
            onClick={() => {
              onClick('popular');
              onMenuClick();
            }}
          >
            Popular
          </NavLink>
          <NavLink
            to="/"
            className="nav-bar-NavLink"
            onClick={() => {
              onClick('upcoming');
              onMenuClick();
            }}
          >
            Upcoming
          </NavLink>
          <NavLink
            to="/"
            className="nav-bar-NavLink"
            onClick={() => {
              onClick('top_rated');
              onMenuClick();
            }}
          >
            Top Rated
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
