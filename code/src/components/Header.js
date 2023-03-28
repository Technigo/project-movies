import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (<header>
    <h1>EVA FLEX</h1>
    <nav>
      <NavLink to="/">Home</NavLink>
    </nav></header>)
}
