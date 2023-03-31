import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate()

  const onHomeButtonClick = () => {
    navigate('/')
  }
  return (
    <div className="not-found">
      <img src="./vs-movies.png" alt="Logo" />
      <p>Sorry, this page doesn&apos;t exist.</p>
      <button className="backBtn" type="button" onClick={onHomeButtonClick}>Return to Home Page</button>
    </div>
  )
}