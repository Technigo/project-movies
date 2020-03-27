import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MovieList } from "./components/List";
import { DetailedInfo } from "./components/Info";
import { ErrorMessage } from './components/ErrorMessage'
import "./index.css";

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

        <Route path="/movies/:movieId">
          <DetailedInfo />
        </Route>

        <Route path="/404">
          <ErrorMessage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};