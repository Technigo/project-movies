import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/error.css';

export const NotFound = () => (
  <div className="error-div">
    <h1 className="error-text">404 - Page Not Found!</h1>
    <Link to="/" className="back-home-link">
      <span className="arrows-wrapper">
        <i className="arrow left"></i>
        <i className="arrow left"></i>
        <i className="arrow left"></i>
      </span>
      Go back to list with movies</Link>
  </div>
);