import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import MovieList from 'components/MovieList';
import MovieDetails from 'pages/MovieDetails';
import NotFound from 'pages/NotFound';


export const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav></nav>
      </header>
      <Switch>
        <Route path="/" exact>
          <div>
            <MovieList />
          </div>
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
