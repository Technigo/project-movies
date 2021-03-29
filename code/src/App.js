import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MovieList } from "./pages/MovieList";

import { Details } from './pages/Details'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/movies/:id">
            <Details />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

