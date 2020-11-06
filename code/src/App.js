import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Header } from "./components/Header";
import { MovieList } from "./pages/MovieList";
import { MovieDetails } from "./pages/MovieDetails";
import { NotFound } from "./pages/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/movies/:movieId" exact>
            <MovieDetails />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </main>
    </BrowserRouter>
  );
};
