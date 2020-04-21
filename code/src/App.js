import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Movies } from './Movies'
import { Details } from './Details'

export const App = () => {

  return (
    <BrowserRouter>
      <main>
        <Switch>
        <Route path='/' exact>
          <Movies />
        </Route>
        <Route path='/movies/:id' component={Details} exact>
           <Details />
        </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
