import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Movielist} from './Movielist'
import {Moviedetails} from './Moviedetails'

//API key= 9c9b2fee306d943c3bd7e47689474308

export const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Movielist />
          </Route>
          <Route path="/test">
            <Moviedetails />
          </Route>
          <Route path="/movies/:movieId" exact>
            <Moviedetails />
          </Route>
        </Switch>
    </BrowserRouter>
  )
}
