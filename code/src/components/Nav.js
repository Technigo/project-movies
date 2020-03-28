import React, { useState } from 'react' // Going to use useState to toggle dropdown
import { Link } from 'react-router-dom'
import './nav.css'

export const Nav = ({ selectMovieList, selectDocuList }) => {
  return (
    <nav>
      <h1>Movies</h1>

      <ul>
        <li>
          <Link to="/">Category</Link>
          <ul className="dropdown">
            <li className="sub-list">
              <Link to="/" onClick={() => selectMovieList('now_playing')}>Now Playing</Link>
            </li>
            <li className="sub-list">
              <Link to="/" onClick={() => selectMovieList('upcoming')}>Upcoming</Link>
            </li>
            <li className="sub-list">
              <Link to="/" onClick={() => selectMovieList('popular')}>Popular</Link>
            </li>
            <li className="sub-list">
              <Link to="/" onClick={() => selectMovieList('top_rated')}>Top Rated</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/docu">Docu Reco</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

      </ul>
    </nav>
  )
}