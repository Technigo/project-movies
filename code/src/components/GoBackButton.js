import React from 'react';
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'
import './GoBackButton.css'

export const GoBackButton = () => {
  const navigate = useNavigate();

  const onGoBackButtonClick = () => {
    navigate(-1);
  }

  return (
    <div className="go-back-button-container">
      <button
        type="button"
        className="go-back-button"
        onClick={onGoBackButtonClick}>
        <FontAwesomeIcon icon={faArrowRotateLeft} />
        <p className="go-back-button-text">Go back</p>
      </button>
    </div>
  )
}