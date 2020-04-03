import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MovieList } from "pages/MovieList";
import { MovieDetail } from "pages/MovieDetail";
import { Nav } from "components/Nav";

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Switch>
          <Route path="/" exact>
            <MovieList sorting="popular" />
          </Route>
          <Route path="/top" exact>
            <MovieList sorting="top_rated" />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetail />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}
