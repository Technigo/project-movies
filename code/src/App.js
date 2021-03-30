import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'

export const App = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/movies/:id" exact>
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>


  )
}
