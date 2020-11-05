import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {

  return (
    <div className='not-found-container'>
      <div className='not-found-wrapper'>
        <h2>Oops! The page you're looking for is not here..</h2>
        <Link className='back-link' to='/'>
          <img className='back-arrow' alt='back arrow' src='../left-arrow.svg'/>
          Movies
        </Link>
      </div>
    </div>
  )
}