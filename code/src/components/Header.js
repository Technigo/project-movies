import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img className="logoImg" src="/cinema_city.png" alt="" />
      </div>
      <ul className="navlinkWrapper">
        <li className="link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="link">
          <NavLink to="/tvseries">TV-serise</NavLink>
        </li>
        <li className="link">
          <NavLink to="/upcoming">Upcoming</NavLink>
        </li>
      </ul>
    </header>
  )
}