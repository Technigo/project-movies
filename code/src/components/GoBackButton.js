import React from 'react';
import { useNavigate } from 'react-router-dom'
import './GoBackButton.css'

export const GoBackButton = () => {
  const navigate = useNavigate();

  const onGoBackButtonClick = () => {
    navigate(-1);
  }

  return (
    <div className="go-back-button-container">
      <button type="button" className="go-back-button" onClick={onGoBackButtonClick}><p className="go-back-button-text">Go back</p></button>
    </div>
  )
}