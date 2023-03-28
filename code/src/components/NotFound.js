import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Sorry nothing here to see....</h1>
      <button type="button" onClick={() => navigate('/')}>
        Go to Home
      </button>
      <button type="button" onClick={onGoBack}>
        Go Back!
      </button>
    </div>
  );
};
