import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import List from "./components/List";
import Details from "components/Details";
import NotFound from "components/NotFound";

export const App = () => {
  return (
    // pre-defined components for routing to multiple pages: when not self-closing; meaning there will be children
    <BrowserRouter>
      <Switch>
        {/*routing to sub page 1 = home page & passing 2 props  */}
        {/*exact path: predefined prop checks if path includes only "/", use only when code overlaps inside path */}
        <Route exact path="/" component={List} />
        {/*routing to sub page 2 & passing 2 props*/}
        <Route path="/movies/:id" component={Details} />
        {/*routing to sub page 404 & passing 2 props*/}
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};
