import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import { MovieList } from './pages/MovieList'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:id" exact>

        </Route>
      </Switch>
    </BrowserRouter>
  )
}
