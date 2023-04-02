import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/')
  }
  return (
    <div className="error-container">
      <p className="error-message">We can&apos;t seem to find the page you&apos;re looking for. Please go back to main page and try again.
      </p>
      <button className="link-to-main" type="button" onClick={onHomeButtonClick}>Take me back</button>
      <span className="film-emoji">🎬</span>
    </div>
  )
}

export default NotFound;