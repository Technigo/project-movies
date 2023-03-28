import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const onGoToHomeButtonClick = () => {
    navigate('/');
  }
  const onGoBackButtonClick = () => {
    navigate(-1);
  }
  return (
    <div>
      <h2> Sorry nothing here :( </h2>
      <button type="button" onClick={onGoToHomeButtonClick}>Go to Home</button>
      <button type="button" onClick={onGoBackButtonClick}>Go Back</button>
    </div>)
}
export default NotFound;