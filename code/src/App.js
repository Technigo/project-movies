import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { MoviesHome } from "./pages/MoviesHome"
import { MoviesDetails } from "./pages/MoviesDetails"
import { NotFound } from "./NotFound"

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <MoviesHome />
          </Route>
          <Route path="/movies/:movieId" exact>
            <MoviesDetails />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
