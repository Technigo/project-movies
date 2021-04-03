import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import CastDetails from "./pages/CastDetails"
import NotFound from './pages/NotFound'

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
        <Route path="/cast/:id" exact>
          <CastDetails />
        </Route>
        <Route path="/notfound" exact>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}