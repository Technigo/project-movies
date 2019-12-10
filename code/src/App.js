import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PopularList } from './PopularList'
import { Detail } from './Detail'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
      <Switch>
        <Route path="/" exact>
          <PopularList/>
        </Route>
        <Route path="/movies/:id">
          <Detail/>
        </Route>
      </Switch>
      </main>
    </BrowserRouter>
  )
}