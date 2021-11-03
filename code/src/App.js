import React from 'react'
import { BrowswerRouter, Switch, Route } from 'react-router-dom'

import List from './pages/List'
import Images from './pages/Images'

export const App = () => {
  return (
    <div>
      <BrowswerRouter>
      <Switch>
        <Route path="/" exact>
        <List />
        </Route>
      <Route path="/movies/:id">

      <Images />
      </Route>
      </Switch>
      </BrowswerRouter>
    </div>
  )
}
