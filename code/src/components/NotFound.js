import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();

  const onHomePageRedirect = () => {
    history.push('/');
  };

  return (
    <div>
      <h2>Sorry this page doesn't exist :(</h2>
      <button onClick={onHomePageRedirect}>Back to movies list</button>
    </div>
  );
};

export default NotFound;
