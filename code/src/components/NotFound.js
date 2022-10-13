import React from 'react';
import ghost from '../assets/ghost.svg';
import GoBack from './GoBack';

const NotFound = () => {
  return (
    <>
      <GoBack />
      <div className="not-found-container">
        <img className="ghost" src={ghost} alt="Ghost" />
        <h1>404</h1>
        <h2>Page not found!</h2>
      </div>
    </>
  )
}

export default NotFound;