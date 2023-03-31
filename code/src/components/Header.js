/* eslint-disable linebreak-style */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logoimage from '../images/moviesheader.PNG'

const Header = () => {
  return (
    <header>
      <img className="logo-image" src={Logoimage} alt="site logo" />
      <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/aboutus"> About us </NavLink>
      </nav>
    </header>
  )
}

export default Header;