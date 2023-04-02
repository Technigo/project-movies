import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate()
  const onGoToHomeButtonClick = () => {
    navigate('/');
  }

  const onGoBackButtonClick = () => {
    navigate(-1)
  }

  return (
    <div className="error">
      <h2 className="error-msg">No movies here!</h2>
      <button className="homeButton" type="button" onClick={onGoToHomeButtonClick}>Go Home</button>
      <button className="backButton" type="button" onClick={onGoBackButtonClick}>Go Back</button>
    </div>
  )
}

export default NotFound