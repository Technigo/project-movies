// TO DO:
// [X] Back button
// [X] background page
// [X] Format first page according to guidelines
// [X] Format second page according to guidelines
// [X] Add a rating
// [X] image not found 
// [] Handle 404 page not found
// [] Handle loading state

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MovieList from './pages/MovieList'
import MovieDetail from './pages/MovieDetail'
import Error from './pages/Error'

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
        <Route path="/error" exact>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
