import React from 'react';

const BackButton = ({ onBackButtonClick }) => {
  return (
    <button type="button" onClick={onBackButtonClick} className="back-button">
      <img src="../images/back.png" alt="back button" />
    </button>
  )
};

export default BackButton;