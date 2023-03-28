import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const returnToHomePage = () => {
    navigate('/');
  }

  return (
    <div className="not-found">
      <p>Sorry, page not found.</p>
      <button type="button" onClick={returnToHomePage}>Go back to home page</button>
    </div>
  );
}