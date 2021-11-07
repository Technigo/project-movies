import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { BASE_URL } from "./utils/urls";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Details from "./components/Details/Details";
import NotFound from "./components/NotFound";
import Loading from "components/Loaders/Loaders";

export const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setLoading(false);
          setList(data.results);
        }, 2000);
      });
  }, []);
  // console.log(list)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          {loading && <Loading />}
          <Route exact path="/" render={() => <List movies={list} />} />
          <Route path="/details/:movieId" component={Details} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </>
  );
};
