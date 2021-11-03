import React from 'react';
import { Link } from 'react-router-dom';
import { BackIcon } from './BackIcon';

const NotFound = () => {
  return (
    <div className='not-found-container'>
      <p>Sorry, page not found.</p>
      <p>Back to movie list</p>

      <Link to='/' className='backLink-404'>
        <BackIcon />
      </Link>
    </div>
  );
};

export default NotFound;
