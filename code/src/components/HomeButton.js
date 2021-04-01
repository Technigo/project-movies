import React from 'react'
import { Link } from 'react-router-dom' 

const HomeButton = () => {
  return (
    <Link to="/">
      <button className="back-button">
        <img src="/Icons/arrow-left-circle.svg" alt="arrow-button" />
        <p>Back</p>
      </button>
    </Link>
  )
}

export default HomeButton