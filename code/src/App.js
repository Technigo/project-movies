import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MoviesList } from 'pages/MoviesList'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exaxt>
          <MoviesList />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
