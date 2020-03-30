import React from 'react'
import { Movies } from 'pages/Movies'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieDetails } from 'pages/MovieDetails'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Movies />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
