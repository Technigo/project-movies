import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MoviesList } from 'pages/MoviesList';
import { MovieDetails } from 'pages/MovieDetails';
import { Nav } from './Nav';
import { TopMoviesHome } from './TopMoviesHome';

export const App = () => {
  return (
    //BrowserRouter creates a sort of map that includes all
    //the sections that can be accessed from the main App page
    //I created a Nav Bar which includes a link to a different
    //page showing top rated movies and a link to initial
    //landing page (App.js)
    <BrowserRouter>
      <main>
        <Nav />
        {/* Swtich will render the first matched component
        according to the path*/}
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