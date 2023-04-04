import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const returnToHomePage = () => {
    navigate('/');
  }

  return (
    <div className="not-found">
      <img id="not-found" src="../not-found.png" alt="not-found" />
      <p>Ooh noo.... Page not found </p>
      <button type="button" onClick={returnToHomePage}>Return here</button>
    </div>
  );
}