import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LeosList from "./components/LeosList";
import Details from "./components/Details";
import NotFound from "./components/NotFound";
import { LEO_URL } from "./utils/urls";

export const App = () => {
  const [list, setList] = useState([]);

  // We make the fetch request here as the component not will be unmounted and we only need to do the fetch once
  useEffect(() => {
    fetch(LEO_URL)
      .then((res) => res.json())
      .then((data) => setList(data.cast));
  }, []);

  // This structure always stays the same
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <LeosList movies={list} />} />
        <Route path="/movies/:id" component={Details} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};
