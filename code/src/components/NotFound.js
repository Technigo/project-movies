import React from 'react';
import { useNavigate } from 'react-router-dom';
import './notfound.css';

const NotFound = () => {
  const navigate = useNavigate();
  const GoBackHome = () => {
    navigate('/');
  }
  return (
    <div className="not-found-container">
      <p> Sorry this page does not exist.😔</p>
      <button type="button" onClick={GoBackHome}>Go back to Homepage</button>
    </div>
  );
}

export default NotFound