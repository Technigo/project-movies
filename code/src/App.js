import React from "react";
import { Switch, Route } from "react-router-dom";

import NotFound from "./pages/not-found/not-found.component";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
