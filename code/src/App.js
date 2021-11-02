import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "components/HomePage";
import AllMovies from "components/AllMovies";
import MovieDetails from "components/MovieDetails";

export const App = () => {
  const [userApiKey, setUserApiKey] = useState("");

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage userApiKey={userApiKey} setUserApiKey={setUserApiKey} />
        </Route>
        <Route path="/all-movies" exact>
          <AllMovies />
        </Route>
        <Route>
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
