import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <Link to="/" className="btn-back">
        <span className="btn-text">Back Home!</span>
        <h1>Not Found! 404</h1>
      </Link>
    </div>
  )
}

export default NotFound;