import React from 'react';
import oldmovieframe from './assets/old-movie-frame.png'

export const Home = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <img src={oldmovieframe} alt="old timey movie frame" />
    </div>
  )
}