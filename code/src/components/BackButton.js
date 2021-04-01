import React from 'react'

import { Link } from 'react-router-dom'

const BackButton = () => {
  return (
    <Link to='/' className="back-button-container">
      <span>
        <img className="back-button" src="../assets/back-arrow.png" alt="back arrow" /> 
      </span>
      Back to movies
    </Link>
  )
}

export default BackButton