import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MovieList from "./pages/MovieList/MovieList";
import { BASE_URL } from "utils/urls";
import Details from "./pages/Details/Details";

export const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setList(data.results);
          setLoading(false);
        }, 2000);
      });
  }, []);

  console.log(list);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <MovieList loading={loading} movieList={list} />}
          />
          <Route path="/details/:movieId" component={Details} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
