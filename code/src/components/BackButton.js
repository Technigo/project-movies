import React from 'react'
//back button //---> <div>Icons made by <a href="https://www.flaticon.com/authors/smartline" title="Smartline">Smartline</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

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