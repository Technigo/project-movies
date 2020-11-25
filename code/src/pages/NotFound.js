/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className="not-found-header"> WRONG WAY, <br /> GO BACK!
      <p className="not-found-smaller">This page doesn't exist.</p>
      <p className="not-found">
        <Link to="/">
          Take me back home.
        </Link>
      </p>
    </div>
  )
}