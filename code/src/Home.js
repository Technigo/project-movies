import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MoviesList } from './MoviesList';
import { MoviesDetails } from './MoviesDetails';

export const Home = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/movies' />
          </Route>

          <Route path='/movies' exact>
            <MoviesList />
          </Route>

          <Route path='/movies/:id' exact>
            <MoviesDetails />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}