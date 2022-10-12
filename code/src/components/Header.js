import React from 'react'
//  { useState }  lägg till är uppe sen
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/details"> Details </NavLink>
      </nav>
    </header>
  )
}

export default Header