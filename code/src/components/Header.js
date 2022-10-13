import React from 'react'
//  { useState }  läg till här uppe
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/details">Details</NavLink>
      </nav>
    </header>
  )
}

export default Header