import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from  './components/Home'
import { Details } from './pages/Details'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies/:id">
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
