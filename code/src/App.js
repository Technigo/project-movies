import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import { MovieList } from "pages/MovieList";
import { MovieDetails } from "pages/MovieDetails"
import { NotFound } from "pages/NotFound"

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
      <Route path="/404">
        <NotFound />
      </Route>
      <Redirect 
      to="/404"
      />
    </Switch>
    </BrowserRouter>
  )
}
