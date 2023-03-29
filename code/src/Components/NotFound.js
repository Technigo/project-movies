import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/');
  }
  return (
    <div>
      <p>"Page not found"</p>
      <button type="button" onClick={onHomeButtonClick}>Return to homepage</button>
    </div>);
}
export default NotFound;