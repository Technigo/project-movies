import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { List } from './components/List'
import { Details } from './components/Details'



export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact >
      <List />
      </Route>
      <Route path ='/movies/:id' exact>
        <Details />
      </Route>
    </Switch>
    </BrowserRouter>
    )
}
