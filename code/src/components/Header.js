import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>

      <img className="movienation" src="./red.png" alt="movie-icon" width="112" height="25" />

      <ul className="navlink-container">
        <li className="navlink">
          <NavLink to="/TVseries"><span role="img" className="emoji" aria-label="popcorn">🍿</span></NavLink>
        </li>
      </ul>
    </header>
  )
}
