import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { MoviePage } from "pages/MoviePage"
import { MovieDetails } from "pages/MovieDetails"

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MoviePage />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}
