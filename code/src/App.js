import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { MovieList } from 'components/MovieList'
import { MoviePage } from 'components/MoviePage'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:id">
          <MoviePage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
