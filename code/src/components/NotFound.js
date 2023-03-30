import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const onStartClick = () => {
    navigate('/')
  }
  return (
    <>
      <div className="not-found">
        <h4 id="not-found-text"> Whoopsie daisies! No movie for yousies!</h4>
      </div>
      <button type="button" onClick={onStartClick}>⬅ Back to movies </button>
    </>
  )
}

export default NotFound;