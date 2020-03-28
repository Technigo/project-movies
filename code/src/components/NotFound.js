import React from 'react'
import { Link } from 'react-router-dom'
import { LeftArrow } from './LeftArrow'
import './notfound.css'

export const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-container">
        <h2 className="not-found-title">Is it too late now to say sorry?</h2>
        <p className="not-found-text">Look's like we're missing more than just our body.</p>
        <Link to="/">
          <button type="button" className="homepage-button">
            <LeftArrow />
            <span className="homepage-button-text">Back to homepage</span>
          </button>
        </Link>
      </div>
    </div>
  )

}