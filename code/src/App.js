import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MovieList } from "pages/MovieList";
import { MovieDetails } from "pages/MovieDetails";
import { CompanyInfo } from "pages/CompanyInfo";

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
        <Route path="/company/:companyId">
          <CompanyInfo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
