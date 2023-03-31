import React from 'react';
import logo from './assets/logomovies.jpg'

export const Home = () => {
  return (
    <div style={{ width: '100vw',
      height: '100vh',
      backgroundColor: 'black' }}>
      <div
        className="logo-parent"
        style={{ position: 'relative',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          alignContent: 'center',
          height: '70vh',
          justifyContent: 'center' }}>
        <img
          src={logo}
          alt="site logo"
          style={{ maxWidth: '100%' }} />
      </div>
    </div>
  )
}
