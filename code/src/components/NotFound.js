import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate()
  const onBackButtonClick = () => {
    navigate('/');
  }

  return (
    <div className="not-found">
      <button className="back-button" type="button" onClick={onBackButtonClick}>Back to Home Page</button>
      <p>Sorry, no such page</p>
    </div>
  )
}

export default NotFound;