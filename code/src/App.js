import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import MovieList from 'components/MovieList';
import MovieDetails from 'pages/MovieDetails';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
            <MovieList />
        </Route>
        <Route path="/movie/:movieId" exact>
          <MovieDetails />
        </Route>
        <Route>
          <NotFound />
        </Route>
        <Redirect 
          to="/404"
        />
      </Switch>
    </BrowserRouter>
  )
}
