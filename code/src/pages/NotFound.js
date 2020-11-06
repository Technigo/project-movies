import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div className="page-not-found">
    <h1 className="not-found-text">Oops! Something went wrong.</h1>
    <h2 className="not-found-text">404 - Page not found</h2>
    <Link to="/">
      <button className="link-back" >Go Home</button>
    </Link>
  </div>
);
