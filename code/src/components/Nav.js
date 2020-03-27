import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export const Nav = () => {
  return (
    <nav>
      <h1>Movies</h1>

      <ul>
        <li>
          <Link>Category</Link>
          <ul className="dropdown">
            <li>
              <Link to="/">Now Playing</Link>
            </li>
            <li>
              <Link to="#">Upcoming</Link>
            </li>
            <li>
              <Link to="#">Popular</Link>
            </li>
            <li>
              <Link to="#">Top Rated</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link>About</Link>
        </li>
      </ul>
    </nav>
  )
}