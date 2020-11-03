import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

export const Nav = () => (
  <header>
    <h1> POPULAR MOVIES</h1>
      <Route path="/movies">
        <Link to="/">
        <button type="button"><span>⬅</span> Back</button>
        </Link>
      </Route>
  </header>
)
