import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/');
  }
  return (
    <div>
      <p className="notFound">Sorry, no page found</p>
      <button className="homeBtn" type="button" onClick={onHomeButtonClick}>Return to Home Page</button>
    </div>
  )
}

export default NotFound;