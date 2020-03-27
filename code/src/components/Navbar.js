import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = ({ header }) => {
  return (
    <nav>
      <h2>{header}</h2>
      <ul>
        <li><NavLink to="/">Popular</NavLink></li>
        <li><NavLink to="/nowplaying">Now playing</NavLink></li>
        <li><NavLink to="/upcoming">Upcoming</NavLink></li>
      </ul>
    </nav>
  )
}
