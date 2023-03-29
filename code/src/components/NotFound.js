import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate()
  const onBackButtonClick = () => {
    navigate('/');
  }

  return (
    <div>
      <p>Sorry, no such page</p>
      <button type="button" onClick={onBackButtonClick}>Back to Home Page</button>
    </div>
  )
}

export default NotFound;