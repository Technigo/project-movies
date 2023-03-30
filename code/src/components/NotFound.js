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
        <img className="ghost" src="./assets/ghost.png" alt="sad ghost" />
      </div>
      <button className="start-button" type="button" onClick={onStartClick}>⬅ Back to Start</button>
    </>
  )
}

export default NotFound;