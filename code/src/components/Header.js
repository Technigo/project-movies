import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>

      <Link to="/"><img className="movienation" src="./red.png" alt="movie-icon" width="112" height="25" /></Link>

      <ul className="navlink-container">
        <li className="navlink">
          <NavLink to="/Details">Home</NavLink>
        </li>
      </ul>
    </header>
  )
}
