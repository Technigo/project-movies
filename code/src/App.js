import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MoviesList } from 'pages/MoviesList';
import { MovieDetails } from 'pages/MovieDetails';
import { Nav } from './Nav';
import { TopMoviesHome } from './TopMoviesHome';

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Nav />

        <Switch>

          <Route path="/" exact>
            <MoviesList />
          </Route>

          <Route path="/movies/:movieID">
            <MovieDetails />
          </Route>

          <Route path="/top-movies">
            <TopMoviesHome />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
};

//Fix a page for movie not found
//move API key to separate file and import it