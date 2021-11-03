import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();

  const onButtonClick = () => {
    history.goBack();
  };

  return (
    <div>
      <p>Page not found!</p>;
      <button onClick={onButtonClick}>Back to home page</button>;
    </div>
  );
};

export default NotFound;
