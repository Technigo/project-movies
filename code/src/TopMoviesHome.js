import React from 'react' ;
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TopMoviesList } from 'pages/TopMoviesList';
import { TopMovieDetails } from 'pages/TopMovieDetails';

export const TopMoviesHome = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/top-movies" exact>
            <TopMoviesList />
          </Route>

          <Route path="/top-movies/:topMovieID">
            <TopMovieDetails />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
};