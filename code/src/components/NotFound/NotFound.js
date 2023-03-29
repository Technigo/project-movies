import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = () => {
    navigate('/');
  };

  return (
    <div>
      <p>Sorry Movie Lover, no such page</p>
      <button type="button" onClick={onHomeButtonClick}>
        Return to Home Page
      </button>
    </div>
  );
};