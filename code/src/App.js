import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MoviesList } from 'pages/MoviesList'
import { MovieDetails } from 'pages/MovieDetails'
import 'scss/app.scss'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <MoviesList />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
