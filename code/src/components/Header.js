import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (<header>
    <h1>This is the header</h1>
    <nav>
      <NavLink to="/">Home</NavLink>
    </nav></header>)
}