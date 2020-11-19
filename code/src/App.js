import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { PopularList } from 'pages/PopularList';
import { MovieDetails } from 'pages/MovieDetails';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  
  return (
    <main className="not-found-background">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <PopularList />
          </Route>
          <Route path="/title/:movieId" exact>
            <MovieDetails />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Redirect to="/404"
          />
        </Switch>
      </BrowserRouter>
    </main>
  )
}
