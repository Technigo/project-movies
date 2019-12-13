import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PopularList } from "./pages/PopularList/PopularList";
import { Detail } from "./pages/Detail/Detail";

export const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <PopularList />
          </Route>
          <Route path="/details/:movieId" exact>
            <Detail />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
};
