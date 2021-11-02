import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import List from "./components/List";
import Details from "components/Details";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/movies/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};
