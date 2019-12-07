import React from 'react'
import { Navigation } from 'components/Navigation/Navigation'
import './Err404.css'

export const Err404 = () => {
  return (
    <div className="error">
      <Navigation />
      <h2>cinema room 404</h2>
      <h4>No Star ever visits this place</h4>
      <h3>Check our other rooms</h3>
    </div>
  )
}