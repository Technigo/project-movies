import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MovieList } from "pages/MovieList";
import { MovieDetail } from "pages/MovieDetail";
import "css/MovieList.css";
import "css/MoviePage.css";
import "css/Link.css";

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetail />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};
