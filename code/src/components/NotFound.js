import React from 'react'
import { HomepageButton } from './HomepageButton'
import './notfound.css'
import { Nav } from './Nav'

export const NotFound = () => {
  return (
    <>
      <Nav />
      <div className="not-found-wrapper">
        <div className="not-found-container">
          <h2 className="not-found-title">Is it too late now to say sorry?</h2>
          <p className="not-found-text">Look's like we're missing more than just our body.</p>
          <HomepageButton />
        </div>
      </div>
    </>
  )

}