import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import arrowLeft from './assets/arrow-left.svg';

export const Header = () => {
  const navigate = useNavigate();
  const onBackButtonClick = () => {
    navigate(-1);
  }
  return (
    <header className="header-parent">
      <nav style={{ display: 'flex',
        width: '100vw',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: '5%' }}>
        <button
          type="button"
          className="backBtn"
          onClick={onBackButtonClick}>
          <img
            src={arrowLeft}
            alt="arrow pointing left"
            style={{ filter: 'invert(100%)', height: '30px' }} />
        </button>
        <NavLink to="/">
          <span style={{ display: 'flex',
            alignItems: 'center',
            margin: '20px' }}>
            <p className="nav-p">Home
            </p>
          </span>
        </NavLink>
        <NavLink to="/movielist">
          <span style={{ display: 'flex',
            alignItems: 'center',
            margin: '20px' }}>
            <p className="nav-p">Movies
            </p>
          </span>
        </NavLink>
        <NavLink to="/tvlist">
          <span style={{ display: 'flex',
            alignItems: 'center',
            margin: '20px' }}>
            <p className="nav-p">Tv shows
            </p>
          </span>
        </NavLink>
      </nav>
    </header>
  )
}