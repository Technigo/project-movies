import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MovieList } from 'pages/MovieList'
import { MovieDetail } from 'pages/MovieDetail'
import { Nav } from 'components/Nav'

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:">
          <MovieDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
