import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'

export const Navbar = ({ header }) => {
  return (
    <nav className="nav-container">
      <Switch>
        <Route path="/(|popular|upcoming|nowplaying)" exact><h2>{header}</h2></Route>
        <Route path="/movies"><NavLink to="/popular" id="back"><h2>Back</h2></NavLink></Route>
      </Switch>
      <ul className="nav-links">
        <li><NavLink to="/popular">Popular</NavLink></li>
        <li><NavLink to="/nowplaying">Now playing</NavLink></li>
        <li><NavLink to="/upcoming">Upcoming</NavLink></li>
      </ul>
      <div className="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  )
}
