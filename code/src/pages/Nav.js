import React from "react"
import { NavLink } from "react-router-dom"
import { ReactComponent as Logo } from "../media/logo2.svg"
import "./css/Nav.css"

export const Nav = () => {
  return (
    <div>

      <ul className="navbar">
        <NavLink className="logo" to="/"><Logo />Home</NavLink>
        <li>
          <NavLink to="/popular" activeClassName="chosen">Popular movies</NavLink>
        </li>
        <li>
          <NavLink to="/upcoming" activeClassName="chosen">Upcoming movies</NavLink>
        </li>
        <li>
          <NavLink to="/top_rated" activeClassName="chosen">Top Rated movies</NavLink>
        </li>
      </ul>
    </div>
  )
}