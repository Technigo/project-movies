import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MoviePosters } from 'pages/MoviePosters'
import { MovieDetails } from 'pages/MovieDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div>
            <MoviePosters />
          </div>
        </Route>
        <Route exact path="/details/:detailId">
          <div>
            <MovieDetails />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
