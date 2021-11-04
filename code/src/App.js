import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import List from "./components/List";
import Details from "./components/Details";
import Header from "./components/Header";
import NotFound from "components/NotFound";
import { MOVIES_URL } from "./utils/urls";

export const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then((data) => setList(data.results));
  }, []);

  const printMovies = (movieName) => {};

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <List movies={list} />} />
        <Route path="/movies/:id" component={Details} />
        <Route path="/404" component={NotFound} />
        {/* <Redirect to="/404" /> */}
      </Switch>
    </BrowserRouter>
  );
};
