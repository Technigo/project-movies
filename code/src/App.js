import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { MovieDetails } from 'pages/MovieDetails'
import { MovieList } from 'components/MovieList'
import { NotFound } from './pages/NotFound'


export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:id" >
          <MovieDetails />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect
          to="/404"
        />
      </Switch>
    </BrowserRouter>

  )
}
