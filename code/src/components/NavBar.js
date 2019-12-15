import React from "react"
import { Link } from "react-router-dom"

import "components/navbar.css"

export const NavBar = () => {


  return (
    <div className="navbar">
      <Link className="home-link" to="/">MOVIE TIME</Link>

    </div>
  )
}