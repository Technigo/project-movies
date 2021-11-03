import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import List from "./components/List";
import Details from "components/Details";
import NotFound from "components/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/movies/:id" component={Details} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};
