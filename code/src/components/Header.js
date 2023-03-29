import React from 'react';
import { NavLink } from 'react-router-dom';
import arrowLeft from './assets/arrow-left.svg';

export const Header = () => {
  return (
    <header>
      <nav>
        {/*  <NavLink to="/details/test">
          <p>Go to details</p>
        </NavLink> */}
        <NavLink to="/">
          <span style={{ display: 'flex', alignItems: 'center', margin: '20px', position: 'absolute' }}>
            <img src={arrowLeft} alt="arrow pointing left" style={{ filter: 'invert(100%)', height: '30px' }} />
            <p style={{ display: 'inline', color: 'white', fontWeight: '700', alignItems: 'center', justifyContent: 'center', margin: '10px' }}>Movies</p>
          </span>
        </NavLink>
      </nav>
    </header>
  )
}