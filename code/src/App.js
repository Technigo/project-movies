import React from "react";
import { MovieList } from "./pages/MovieList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieDetails from "pages/MovieDetails";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MovieList} />
        <Route path="/:movieID" exact component={MovieDetails} />
      </Switch>
    </BrowserRouter>
  );
};
