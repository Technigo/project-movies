import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();

  const onHomePage = () => {
    history.push('/');
  };
  const onPreviousPage = () => {
    history.goBack();
  };

  return (
    <div className='not-found-page'>
      <h1>WE ARE SORRY, PAGE NOT FOUND</h1>
      <p>Movie you are looking for does not exist.</p>
      <div className='not-found-container'>
        <button className='not-found-back' onClick={onHomePage}>
          Back to home page
        </button>
        <button className='not-found-previous' onClick={onPreviousPage}>
          Back to previous page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
