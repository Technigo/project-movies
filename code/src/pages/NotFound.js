import React from 'react';
import { Link } from 'react-router-dom'

export const NotFound = () => {

  return (
    <div className="not-found-container">
      <h2>Oops! The page you're looking for couldn't be found.</h2>
      <Link to='/'>
        <img className='back-arrow' alt='back arrow' src='../left-arrow.svg'/>
        Movies
      </Link>
    </div>
  )
}