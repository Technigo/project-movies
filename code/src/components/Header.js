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
          <NavLink to='/NewReleases'>New Releases</NavLink>
        </li>
        <li>
          <NavLink to='/Oncinema'>On cinema</NavLink>
        </li>
        <li>
          <NavLink to='/PopularTV-series'>Popular TV-series</NavLink>
        </li>
      </ul>
    </header>
  )
}
