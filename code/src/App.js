import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MovieList from './pages/MovieList'
import MovieDetail from './pages/MovieDetail'
import Error from './pages/Error'
import Companies from './pages/Companies'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:id" exact>
          <MovieDetail />
        </Route>
        <Route path="/error" exact>
          <Error />
        </Route>
        <Route path="/companies/:comp" exact>
          <Companies />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
