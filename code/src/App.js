import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { API_URL_UPCOMING } from "./utils/urls";
import NotFound from "./components/NotFound";

export const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(API_URL_UPCOMING)
      .then((res) => res.json())
      .then((data) => setList(data.results));
  }, []);

  console.log(list);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <MovieList movie={list} />} />
        <Route path="/details/:movieId">
          <MovieDetails />
        </Route>
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};
