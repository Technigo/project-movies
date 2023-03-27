import React from 'react'
// eslint-disable-next-line spaced-comment
//import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <ul className="navlink-container">
        <li className="navlink">
          <h1>Navlink to cinema</h1>
        </li>
        <li className="navlink">
          <h2>Navlink to tv-series</h2>
        </li>
      </ul>
    </header>
  )
}