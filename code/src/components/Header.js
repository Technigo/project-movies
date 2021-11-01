import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        MovieList
      </NavLink>
      <NavLink to="/details">
        MovieDetails
      </NavLink>
    </header>
  )
}

export default Header