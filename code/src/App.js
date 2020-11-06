import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MovieList } from "pages/MovieList";
import { MovieDetails } from "pages/MovieDetails";
import PageNotFound from "pages/PageNotFound";

// api-key 995425e2e6cd0fcf599ff795098e1e8b

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:movieId" exact>
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
