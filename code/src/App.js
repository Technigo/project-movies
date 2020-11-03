import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { PopularList } from 'pages/PopularList';
import { MovieDetails } from 'pages/MovieDetails';


export const App = () => {
  
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <PopularList />
          </Route>
          <Route path="/title/:movieId">
            <MovieDetails />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  )
}
