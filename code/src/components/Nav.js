/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="nav">
      <h1>
        <NavLink to="/">
          What's on: Sweden
        </NavLink>
      </h1>

      <ul>
        <li>
          <NavLink to="/">
            Now Playing
          </NavLink>
        </li>
        <li>
          <NavLink to="/top">
            Top Rated
          </NavLink>
        </li>
        <li>
          <NavLink to="/soon">
            Coming Soon
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}