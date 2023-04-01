import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'

export const NotFound = () => {
  const navigate = useNavigate();

  const onHomeButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="notFound">
      <h1>404 Page Not Found</h1>
      <p>Looks like you have entered a URL that does not exist on this site.</p>
      <button
        type="button"
        className="goBackBtn"
        onClick={onHomeButtonClick}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons8-clapperboard-50-white.png`}
          alt="clapperboard icon"
          className="clapperboard-icon" />
            Go back
      </button>
    </div>
  );
};