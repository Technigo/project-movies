import React from 'react'
import { MoviesCatalogue } from './pages/MoviesCatalogue'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MoviesCatalogue />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
