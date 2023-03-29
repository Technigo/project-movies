import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/');
  }
  return (
    <div>
      <p>Sorry Movie lover, that page does not exist</p>
      <button type="button" onClick={onHomeButtonClick}>Return to homepage</button>
    </div>
  )
};

export default NotFound;