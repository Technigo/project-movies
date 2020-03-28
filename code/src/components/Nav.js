import React, { useState } from 'react' // Going to use useState to toggle dropdown
import { Link } from 'react-router-dom'
import './nav.css'

export const Nav = ({ selectMovieList }) => {
  return (
    <nav>
      <h1>Binge</h1>

      <ul>
        <li>
          <Link to="/">Category</Link>
          <ul className="dropdown">
            <li className="sub-list">
              <Link to="/" onClick={() => selectMovieList(137418)}>The Winners</Link>
            </li>
            <li className="sub-list">
              <Link to="/" onClick={() => selectMovieList(137392)}>Docu Reco</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

      </ul>
    </nav>
  )
}