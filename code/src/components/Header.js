/* eslint-disable linebreak-style */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>

      <Link to='/'><img className='miniflix' src='https://cloudinary-res.cloudinary.com/image/upload/v1521663307/MiniFlix-Logo_620x180.png' alt='Netflix' width='112' height='28' /></Link>

      <ul className='navlink-container'>
        <li className='navlink'>
          <NavLink to='/newReleases'>On cinema</NavLink>
        </li>
        <li className='navlink'>
          <NavLink to='/upcoming'>Upcoming</NavLink>
        </li>
        <li className='navlink'>
          <NavLink to='/TV-series'>TV-series</NavLink>
        </li>
      </ul>
    </header>
  )
}
