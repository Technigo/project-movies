import React from 'react';
import { useNavigate } from 'react-router-dom'
import { TbCircleArrowLeftFilled } from 'react-icons/tb';

const BackButton = () => {
  const navigate = useNavigate();
  const onBackButtonClick = () => {
    navigate(-1);
  }
  return (
    <button className="back-btn" type="button" onClick={onBackButtonClick}>
      <TbCircleArrowLeftFilled />
    </button>
  )
}

export default BackButton;