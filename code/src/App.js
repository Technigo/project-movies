import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MoviesList } from "./pages/MoviesList";
import { MovieInfo } from "./pages/MovieInfo";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact>
            <MoviesList />
          </Route>

          <Route path="/movie/:id" exact>
            <MovieInfo />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
