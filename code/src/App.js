import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import MainSite from "components/MainSite";
import DetailSite from "components/DetailSite";
import NotFound from "components/NotFound";
import { API_URL } from "./utils/urls";

export const App = () => {
  const [mainSite, setMainSite] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMainSite(data.results));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainSite}>
            <MainSite movies={mainSite} />
          </Route>
          <Route exact path="/details/:id" component={DetailSite} />
          <Route>
            <NotFound />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </>
  );
};
