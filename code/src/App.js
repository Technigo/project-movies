import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { MovieList } from './components/MovieList'



export const App = () => {


  return (
  <BrowserRouter>
    <Switch>
      <Route>
        <MovieList />
      </Route>
    </Switch>
  </BrowserRouter>
  )
}
