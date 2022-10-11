import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <h1>
        <Link to='/'>The movie browser</Link>
      </h1>
      <ul>
        <li>
          <NavLink to='/newReleases'>New Releases</NavLink>
        </li>
        <li>
          <NavLink to='/upcoming'>Upcoming</NavLink>
        </li>
        <li>
          <NavLink to='/TV-series'>TV-series</NavLink>
        </li>
      </ul>
    </header>
  )
}
