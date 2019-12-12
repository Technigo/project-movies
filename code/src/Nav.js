import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { ReactComponent as BackPicture } from './back.svg'

import 'Nav.css'

export const Nav = () => {
  return (
    <Route path="/movie/" >

      <Link to="/" className="nav-styling"> <div className="icon"><BackPicture /></div>Go back</Link>
    </Route >
  )
}