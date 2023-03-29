// /////////////// IMPORT //////////////////////// //

import React from 'react';
import { useNavigate } from 'react-router-dom';

// /////////////// COMPONENT //////////////////////// //

export const NotFound = () => {
  const navigate = useNavigate();
  const returnToHomePage = () => {
    navigate('/');
  };

  return (
    <section className="notfound-container">
      <div className="notfound-text">
        <p> Not found :( </p>
        <button type="button" className="home-button" onClick={returnToHomePage}> Back to Startpage </button>
      </div>
    </section>
  )
};