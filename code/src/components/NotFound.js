import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate()
  const onBackButtonClick = () => {
    navigate('/')
  }
  return (
    <div>
      <h2>Sorry,nothing here</h2>
      <button type="button" onClick={onBackButtonClick}>go to HomePage</button>
    </div>
  )
}