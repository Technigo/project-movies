import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { TopRatedList } from './TopRatedList';
import { TopRatedDetails } from './TopRatedDetails';
import { MovieList } from './MovieList';

export const TopRatedHome = () => {

  return (
    <BrowserRouter>
      <main>
        <Switch>

		  <Route path="/" exact>
            <MovieList />
          </Route>

          <Route path="/top_rated" exact>
            <TopRatedList />
          </Route>

          <Route path="/top_rated/:topMovieId">
            <TopRatedDetails  />
          </Route>


        </Switch>
      </main>
    </BrowserRouter>
  )
};
