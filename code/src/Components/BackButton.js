import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <p className='back-button' onClick={onBackButtonClick}>
      Movies
    </p>
  );
};

export default BackButton;
