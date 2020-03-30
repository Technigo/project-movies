import React from 'react'
import { Link, Route } from 'react-router-dom'
import './nav.css'

export const Nav = ({ selectMovieList }) => {
  return (
    <nav>
      <h1 className="site-headline">Binge</h1>
      <Route path="/" exact>
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
      </Route>
    </nav>
  )
}