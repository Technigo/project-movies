import React from 'react'
import { Link, Route } from 'react-router-dom'
import './nav.css'

//Navigation bar used to navigate between different movie lists or the about page
//List and sub-list only shown when on path="/", specified using Route
//selectMovieList passed as props, when a category is selected from the list the state of movieList in App.js is updated
export const Nav = ({ selectMovieList }) => {
  return (
    <nav>
      <Link to="/">
        <h1 className="site-headline">Binge</h1>
      </Link>

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