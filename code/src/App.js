import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from './Components/MovieList'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  )
}
