import React from 'react';

import { Header } from 'components/Header'
import { MovieList } from 'components/MovieList';
import { MovieDetails } from 'pages/MovieDetails';
import { NotFound } from 'pages/NotFound';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Header />
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
