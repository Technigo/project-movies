import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {MoviesList} from './components/MoviesList'
import {MovieDetails} from './pages/MovieDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MoviesList/>
        </Route>
        <Route path="/movie/:id">
          <MovieDetails/>
        </Route>
      </Switch>
    </BrowserRouter>
 
  )
}
