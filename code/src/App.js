import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import components
import { MovieList } from "pages/MovieList.js";
import { MovieDetail } from "pages/MovieDetail.js";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movie/:movieId">
          <MovieDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
