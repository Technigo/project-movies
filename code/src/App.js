import React from 'react';

import { MovieList } from 'components/MovieList';
import { MovieDetails } from 'pages/MovieDetails';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MovieList />
        </Route>
        <Route path='/movies/:id' exact>
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
