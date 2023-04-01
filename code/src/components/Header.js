/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logoimage from '../images/moviesheader.PNG'

const Header = () => {
  const navigate = useNavigate();
  function handleLogoClick() {
    navigate(-1)
  }
  return (
    <header>
      <img className="logo-image" src={Logoimage} alt="site logo" onClick={() => { handleLogoClick() }} />
      <nav>
        <NavLink to="/"> Upcoming movies </NavLink>
        <NavLink to="/popularmovies"> Popular movies </NavLink>
        <NavLink to="/aboutus"> About us </NavLink>
      </nav>
    </header>
  )
}

export default Header;