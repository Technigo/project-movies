import React from 'react'
import { Link } from 'react-router-dom'
import Backicon from './Backicon'

const NotFound = () => {
  return (
    <section className="error-container">
      <Link to="/">
        <Backicon /> Home
      </Link>
      <h2>Sorry, this movie was not found</h2>
    </section>
  )
}

export default NotFound
