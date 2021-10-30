import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { MovieDetails } from './Pages/MovieDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <main className="main-container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movie-details" exact>
            <MovieDetails />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
