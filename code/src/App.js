import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MovieList } from "./components/List";
import { DetailedInfo } from "./components/Info";
import "./index.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/movies/:movieId">
          <DetailedInfo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};