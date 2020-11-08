import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { MovieList } from 'components/MovieList'
import { MoviePage } from 'components/MoviePage'
import { NotFound } from 'components/NotFound'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movie/:id" exact>
          <MoviePage />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect 
          to="/404"
        />
      </Switch>
    </BrowserRouter>
  );
}
