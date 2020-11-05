import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MoviesList } from "./pages/MoviesList";
import { MovieInfo } from "./pages/MovieInfo";
import { Error } from "./pages/Error";

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact>
            <MoviesList />
          </Route>

          <Route path="/movie/:id" >
            <MovieInfo />
          </Route>

          <Route path="/error" >
            <Error />
          </Route>


        </Switch>
      </div>
    </BrowserRouter>
  )
}
