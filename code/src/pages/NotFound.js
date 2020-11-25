/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export const NotFound = () => {
  return (
    <div className="not-found-header"> WRONG WAY, <br /> GO BACK!
      <p className="not-found-smaller">This page doesn't exist.</p>
      <p className="not-found"><a href="/" tabIndex="0">Take me back home.</a></p>
    </div>
  )
}