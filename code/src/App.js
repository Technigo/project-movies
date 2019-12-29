import React from 'react'
import { MoviesCatalogue } from './pages/MoviesCatalogue'
import { MovieDetails } from './pages/MovieDetails'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MoviesCatalogue />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
