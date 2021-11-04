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
    <div>
      <button className='not-found' onClick={onHomePage}>
        Back to home page
      </button>
      <button className='not-found' onClick={onPreviousPage}>
        Back to previous page
      </button>
      <p>Page not found!</p>
    </div>
  );
};

export default NotFound;
