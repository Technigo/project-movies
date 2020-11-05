import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { MovieList } from "./components/MovieList";
import { MoviePage } from "./pages/MoviePage";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:id" exact>
          <MoviePage />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};
