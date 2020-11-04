import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PopularList from "./pages/PopularList";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <PopularList />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetail />
          {/* <Route path="/404">
            <NotFound />
          </Route>
          <Redirect to="/404" /> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
