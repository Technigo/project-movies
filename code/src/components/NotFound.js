import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const onGoToHomeButtonClick = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Page not found </h2>
      <button type="button" onClick={onGoToHomeButtonClick}>
        Go to Home
      </button>
    </div>
  );
};
