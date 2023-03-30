import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import arrowLeft from './assets/arrow-left.svg';

export const Header = () => {
  const navigate = useNavigate();
  const onBackButtonClick = () => {
    navigate(-1);
  }
  return (
    <header style={{ position: 'absolute' }}>
      <nav style={{ display: 'flex',
        flexWrap: 'wrap',
        width: '100vw',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: '5%' }}>
        <button type="button" className="backBtn" onClick={onBackButtonClick}><img src={arrowLeft} alt="arrow pointing left" style={{ filter: 'invert(100%)', height: '30px' }} /><span>Movies</span></button>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movielist">
          <span style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
            <p style={{ display: 'inline', color: 'white', fontWeight: '700', alignItems: 'center', justifyContent: 'center', margin: '10px' }}>Movies</p>
          </span>
        </NavLink>
        <NavLink to="/tvlist">
          <span style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
            <p style={{ display: 'inline', color: 'white', fontWeight: '700', alignItems: 'center', justifyContent: 'center', margin: '10px' }}>Tv shows</p>
          </span>
        </NavLink>
      </nav>
    </header>
  )
}