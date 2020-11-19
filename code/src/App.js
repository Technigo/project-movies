import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { MovieList } from "./pages/MovieList";
import { MovieDetails } from "./pages/MovieDetails";
import { Nav } from "./components/nav";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Route>
        <Nav />
        <main>
          <Switch>
            <Route path="/" exact>
              <MovieList />
            </Route>
            <Route path="/movies/:id">
              <MovieDetails />
            </Route>
            <Route path="/404">
              <NotFound />
            </Route>
            <Redirect to="/404" />
          </Switch>
        </main>
      </Route>
    </BrowserRouter>
  );
};
