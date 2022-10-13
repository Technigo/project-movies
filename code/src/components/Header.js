import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Top Rated Movies</h1>
      <nav className="nav-links">
        <NavLink to="/"> Home </NavLink>
      </nav>
    </header>
  )
}

export default Header