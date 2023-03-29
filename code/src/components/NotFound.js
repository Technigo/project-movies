import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate()
  const onGoToHomeButtononClick = () => {
    navigate('/')
  }
  return (
    <div>
      <h2>Sorry,nothing here</h2>
      <button type="button" onClick={onGoToHomeButtononClick}>go to HomePage</button>
    </div>
  )
}