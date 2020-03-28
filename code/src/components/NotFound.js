import React from 'react'
import { Link } from 'react-router-dom'
import { LeftArrow } from './LeftArrow'

export const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Is it too late now to say sorry?</h2>
      <p>Look's like we're missing more than just our body.</p>
      <Link to="/">
        <button type="button" className="homepage-button"><LeftArrow />Back to homepage</button>
      </Link>
    </div>
  )

}