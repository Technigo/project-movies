import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MoviesList } from './pages/MoviesList'
// API key = ef0fb1aeba7a73c8909c5037c23fc608

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <MoviesList />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
