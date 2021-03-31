import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Detail from './pages/Detail'
import MovieList from './pages/MovieList'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path='/'>
            <MovieList />
          </Route>
          <Route path='/movie/:id'>
            <Detail />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
