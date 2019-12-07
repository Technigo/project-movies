import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

export const Navigation = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const showMenuHandler = () => {
    setShowMobileNav(!showMobileNav)
  }
  return (
    <nav>
      <span className="left">
        <h1>Red Carpet</h1>
        <button type="button" onClick={showMenuHandler}>
          <i className="fa fa-bars fa-2x" aria-hidden="true" />
        </button>
      </span>
      <span className={showMobileNav ? 'down' : 'hidden'}>
        <Link to="/">
          Popular
        </Link>
        <Link to="/now_playing">
          Now Playing
        </Link>
        <Link to="/top_rated">
          Top Rated
        </Link>
        <Link to="/upcoming">
          Upcoming
        </Link>
      </span>
    </nav>
  )
}