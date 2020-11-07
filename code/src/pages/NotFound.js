/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export const NotFound = () => {
  return (
    <div id="not-found-header"> WRONG WAY, <br /> GO BACK!
      <p id="not-found-smaller">This page doesn't exist.</p>
      <p id="not-found"><a href="/" tabIndex="0">Take me back home.</a></p>
    </div>
  )
}