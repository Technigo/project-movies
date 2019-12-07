import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

export const Navigation = () => {
  return (
    <nav>
      <span className="left">
        Red Carpet
      </span>
      <span className="right">
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