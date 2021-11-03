import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MainSite from "MainSite";
import DetailSite from "DetailSite";
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
      <div>helloo</div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainSite movies={mainSite} />
          </Route>
          <Route exact path="/details/:id">
            <DetailSite />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
