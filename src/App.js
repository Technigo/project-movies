import React from 'react'
import { Movies } from 'components/Movies'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//import { MovieDetails } from 'components/MovieDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Movies />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
