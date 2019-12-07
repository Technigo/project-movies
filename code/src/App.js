import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PopularList } from "./components/PopularList/PopularList";

export const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <PopularList />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
};
