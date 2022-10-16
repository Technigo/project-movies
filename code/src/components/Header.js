import React from 'react';
import { NavLink } from 'react-router-dom'
import 'css/header.css'

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav-links">
        <NavLink to="/"> <h1> LinNin Inc. </h1> </NavLink>
      </nav>
    </header>

  );
}