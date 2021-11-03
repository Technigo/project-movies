import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();

  const onButtonClick = () => {
    history.goBack();
  };

  return (
    <div>
      <button className='not-found' onClick={onButtonClick}>
        Back to home page
      </button>
      <p>Page not found!</p>
    </div>
  );
};

export default NotFound;
