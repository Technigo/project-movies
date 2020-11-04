import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MovieList } from "./components/MovieList";
import { MoviePage } from "./pages/MoviePage";

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
      </Switch>
    </BrowserRouter>
  );
};
