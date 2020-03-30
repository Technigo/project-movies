import React from 'react'
import { Movies } from 'components/Movies'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieDetails } from 'components/MovieDetails'

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
