import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PopularList from "./pages/PopularList";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";

export const App = () => {
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <PopularList sorting="popular" />
        </Route>
        <Route path="/top" exact>
          <PopularList sorting="top_rated" />
        </Route>
        <Route path="/upcoming" exact>
          <PopularList sorting="upcoming" />
        </Route>
        <Route path="/new" exact>
          <PopularList sorting="now_playing" />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetail />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};
