import React from 'react';
import { Link } from 'react-router-dom'
import '../css/notFound.css'

export const NotFound = () => {
  return (
    <div className="container">
      <p className="notFoundText">Sorry, the page can not be found.</p>
      <Link to="/">
        <button type="button">Back to home page</button>
      </Link>
    </div>
  );
}