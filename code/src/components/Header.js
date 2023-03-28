import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <ul className="navling-container">
        <h1>EVA FLEX</h1>
        <nav>
          <li>
            <NavLink to="/TV-series">Tv-series</NavLink>
          </li>
        </nav>
      </ul>
    </header>)
}
