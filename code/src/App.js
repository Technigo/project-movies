import React from 'react'
import { MovieList } from 'pages/MovieList'
import { MovieDetail } from 'pages/MovieDetail'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <MovieList />
        </Route>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
