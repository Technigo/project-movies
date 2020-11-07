import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { MovieStartPage } from "./pages/MovieStartPage";
import { MovieBio } from "./pages/MovieBio";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieStartPage />
        </Route>
        <Route path="/movies/:id" exact>
          <MovieBio />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
