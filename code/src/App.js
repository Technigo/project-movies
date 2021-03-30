import React from "react";
import { MovieList } from "./pages/MovieList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
