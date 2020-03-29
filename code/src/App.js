import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MovieList } from "./components/List";
import { DetailedInfo } from "./components/Info";
import "./index.css";
import { FailedTo } from "components/Failed";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/top_rated">
          <MovieList category="top_rated" />
        </Route>

        <Route path="/upcoming">
          <MovieList category="upcoming" />
        </Route>

        <Route path="/now_playing">
          <MovieList category="now_playing" />
        </Route>

        <Route path="/movies/:movieId">
          <DetailedInfo />
        </Route>

        <Route path="/404">
          <FailedTo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};