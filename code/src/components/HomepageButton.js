import React from 'react'
import { Link } from 'react-router-dom'
import { LeftArrow } from './LeftArrow'
import './homepagebutton.css'

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