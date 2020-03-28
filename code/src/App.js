import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from 'pages/MovieList'
import { MovieDetails } from 'pages/MovieDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route path="/details/:movieID">
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
