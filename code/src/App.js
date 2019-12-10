import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { PopularList } from './pages/PopularList'
import { Detail } from './pages/Detail'

export const App = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <PopularList />
        </Route>
        <Route exact path="/movie/:movieId" >
          <Detail />
        </Route>

      </Switch>
    </BrowserRouter>

  )
}
