import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../assets/images/left-arrow.svg'

const GoBack = () => {
  return (
    <Link to="/">
      <div className="go-back">
        <img className="back-icon" src={backIcon} alt="Go back" />
        <p>Movies</p>
      </div>
    </Link>
  )
}

export default GoBack;