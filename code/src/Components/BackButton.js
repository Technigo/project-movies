import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  };

  return (
    // <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
    <a className='back-button' onClick={onBackButtonClick}>
      Movies
    </a>
  );
};

export default BackButton;
