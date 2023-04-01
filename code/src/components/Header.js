/* eslint-disable react/jsx-no-undef */
import React from 'react';
import logo from 'popcorn.png'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <Link className="header" to="/"> Movies </Link>
        <Link to="/">
          <img src={logo} alt="popcorn" />
        </Link>
      </nav>
    </header>
  )
}

