import React from 'react'
import { Link } from 'react-router-dom'
import { LeftArrow } from './LeftArrow'
import './homepagebutton.css'

//Used on error page to redirect the user back to the homepage
export const HomepageButton = () => {
  return (
    <Link to="/">
      <button type="button" className="homepage-button">
        <LeftArrow />
        <span className="homepage-button-text">Back to homepage</span>
      </button>
    </Link>
  )
}