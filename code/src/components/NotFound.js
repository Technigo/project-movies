import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const onStartClick = () => {
    navigate('/')
  }
  return (
    <div>
      <p> Whoopsie daisies! No movie for yousies!</p>
      <button type="button" onClick={onStartClick}>Back to movies </button>
    </div>

  )
}

export default NotFound;