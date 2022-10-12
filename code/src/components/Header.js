import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/details"> Details </NavLink>
        <Link to="/"> Home </Link>
        <Link to="/details"> Details </Link>
      </nav>
    </header>
  )
}

export default Header