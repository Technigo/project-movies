import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/details.css'

export const Header = () => {
  const [isActive, setActive] = useState(false)

  const toggleClass = () => {
    setActive(!isActive)
  }

  return (
    <>
      <div className='header-wrapper'>
        <h1>Movie Season</h1>

        <div
          className={isActive ? 'toggle-active' : 'toggle'}
          onClick={toggleClass}
        ></div>
      </div>

      <header>
        <nav
          className={isActive ? 'side-menu-active' : 'side-menu-hidden'}
          onClick={toggleClass}
        >
          <NavLink exact to='/' activeClassName='active'>
            Popular
          </NavLink>
          <NavLink to='/top-rated' activeClassName='active'>
            Top Rated
          </NavLink>
          <NavLink to='/upcoming' activeClassName='active'>
            Upcoming
          </NavLink>
          <NavLink to='/now-playing' activeClassName='active'>
            Now Playing
          </NavLink>
        </nav>
      </header>
    </>
  )
}
