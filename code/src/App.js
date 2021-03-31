// TO DO:
// [X] Back button
// [X] background page
// [] Format first page according to guidelines
// [] Format second page according to guidelines
// [] Add a rating

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MovieList from './pages/MovieList'
import MovieDetail from './pages/MovieDetail'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:id" exact>
          <MovieDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
