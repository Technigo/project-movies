import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

import 'Nav.css'

export const Nav = () => {
  return (
    <Route path="/movie/" >

      <Link to="/" className="nav-styling"><div className="arrow-container" ><div className="arrow">&#60;</div></div>Go back</Link>
    </Route >
  )
}