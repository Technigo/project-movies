import React from 'react';

import { MovieList } from 'components/MovieList';
import { MovieDetails } from 'pages/MovieDetails';
import { NotFound } from 'pages/NotFound';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <header> Movies Toplist </header>
        <Switch>
          <Route path='/' exact>
            <MovieList />
          </Route>
          <Route path='/movies/:id' exact>
            <MovieDetails />
          </Route>
          <Route path='/404'>
            <NotFound />
          </Route>
          <Redirect 
          to='/404'
          />
        </Switch>
      </BrowserRouter>
  );
};
