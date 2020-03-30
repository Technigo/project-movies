import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MoviesList } from './pages/MoviesList'
import { MovieDetails } from './pages/MovieDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact>
            <MoviesList />
          </Route>
          <Route path="/movies/:mayo" exact>
            <MovieDetails />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>


  )
}
