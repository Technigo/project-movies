import React from 'react'

import { MovieList } from './components/MovieList'
import { MovieThumb } from './components/MovieThumb'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:slug" exact >
          {/* <MovieDetails />  */}
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
