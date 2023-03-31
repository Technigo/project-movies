import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img className="logoImg" src="/cinema_city.png" alt="" />
      </div>
      <nav className="navlinkWrapper">
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <NavLink to="/tvseries">TV-serise</NavLink>
        </p>
        <p>
          <NavLink to="/upcoming">Upcoming</NavLink>
        </p>
      </nav>
    </header>
  )
}