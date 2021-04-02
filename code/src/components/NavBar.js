import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <nav>
        <Link className="nav-bar-link" to={`/movies/popular`}>Popular</Link>
        <Link className="nav-bar-link" to={`/movies/upcoming`}>Upcoming</Link> 
    </nav>
  )
}

export default NavBar
