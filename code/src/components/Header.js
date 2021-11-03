import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return <header>
    <h1>HEADER</h1>
    <NavLink exact to="/" activeClassName="my-custom-active">List  </NavLink>
    <NavLink 
      exact to="/details"
      activeClassName="my-custom-active">  
        Details
    </NavLink>
  </header>
}

export default Header