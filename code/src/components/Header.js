import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <NavLink to="/">
        Popular Movies
      </NavLink>
      <NavLink to="/details">
        Summary
      </NavLink>
    </header>
  )
}
