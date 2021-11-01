import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieList from "./pages/MovieList/MovieList";
import { BASE_URL } from "utils/urls";
import Details from "./pages/Details/Details";

export const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setList(data.results));
  }, []);

  console.log(list);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <MovieList movieList={list} />} />
        <Route path="/details/:movieId" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};
