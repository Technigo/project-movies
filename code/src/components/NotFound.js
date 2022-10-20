import React from 'react';
import ghost from '../assets/images/ghost.svg';
import GoBack from './GoBack';

const NotFound = () => {
  return (
    <div className="movie-page" id="not-found-container">
      <GoBack />
      <img className="ghost" src={ghost} alt="Ghost" />
      <h1>404</h1>
      <h2>Page not found!</h2>
    </div>
  )
}

export default NotFound;