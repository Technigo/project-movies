import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MovieList } from "./pages/MovieList";

// const DETAIL_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
          {/* <Route path="/movies/:id">
            <Details />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

