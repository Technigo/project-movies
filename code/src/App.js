import React from 'react'
import { BrowserRouter, Route,Switch } from "react-router-dom"

import { MovieList } from "pages/MovieList";
import { MovieDetails } from "pages/MovieDetails"

export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/"exact>
        <MovieList />
      </Route>
      <Route path="/movies/:id" exact>
        <MovieDetails />
      </Route>
    </Switch>
    </BrowserRouter>
  )
}
