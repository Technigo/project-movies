import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1>
      <i className="fas fa-bug"></i>
        Sorry... The page could not be found.</h1>
      <Link to='/' className='error-link'>
        Go back to main page
      </Link>
    </div>
  )
}