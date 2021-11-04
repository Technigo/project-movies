import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink exact to="/">
          Back to list
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
