import React from 'react';
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();
  const onBackToHomeButtonClick = () => {
    navigate(-1);
  }
  return (
    <div>
      <div>Page is not found</div>
      <button type="button" onClick={onBackToHomeButtonClick}>Back to Home</button>
    </div>
  )
}

export default NotFound;