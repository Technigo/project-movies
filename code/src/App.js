import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PopularList } from './PopularList'
import { Detail } from './Detail'
import { ShowSimilar } from './ShowSimilar'

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
        <Route path="/similar/:id">
          <ShowSimilar />
        </Route>
      </Switch>

      </main>
    </BrowserRouter>
  )
}