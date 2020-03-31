import React from 'react'
import { Movies } from 'pages/Movies'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieDetails } from 'pages/MovieDetails'
import { Header } from './components/Header.js'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Movies />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
