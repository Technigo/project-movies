import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const backToHomeButton = () => {
    navigate('/');
  }
  return (
    <div>
      <p>Sorry movie buff, no such page found.</p>
      <button type="button" onClick={backToHomeButton}>Back to Movies</button>
    </div>
  )
}