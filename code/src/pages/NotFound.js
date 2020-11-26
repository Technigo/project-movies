import React from 'react';

import arrow from '../icons/arrow.svg';

const NotFound = () => {
  return (
    <div className='detail-page message'>
      <a className='back-link' href='/'>
        <img src={arrow} alt='back arrow' />
        Movies
      </a>
      <h1>Oops! Page not found</h1>
      <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site</p>
    </div>
  );
};

export default NotFound;