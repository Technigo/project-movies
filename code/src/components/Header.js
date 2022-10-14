import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className="nav-links">
        <NavLink className="home-link-text" to="/"> <h1>Top Rated Movies</h1> </NavLink>
      </nav>
    </header>
  )
}

export default Header