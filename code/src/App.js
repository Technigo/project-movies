import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MovieList from "./pages/MovieList/MovieList";
import Characters from "./pages/Characters/Characters";
import { BASE_URL } from "utils/urls";
import Details from "./pages/Details/Details";
import Errors from "./Components/Error/Errors";
import Loading from "Components/Loading/Loading";

export const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState("popular");

  useEffect(() => {
    setLoading(true);
    fetch(BASE_URL(select))
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setLoading(false);
          setList(data.results);
        }, 2000);
      });
  }, [select]);

  return (
    <>
      <BrowserRouter>
        <Switch>
          {loading && <Loading />}
          <Route
            path="/"
            exact
            render={() => (
              <MovieList
                select={select}
                setSelect={setSelect}
                loading={loading}
                movieList={list}
              />
            )}
          />
          <Route path="/details/:movieId" exact>
            <Details />
          </Route>
          <Route exact path="/details/:movieId/credits">
            <Characters />
          </Route>
          <Route path="/404" component={Errors} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </>
  );
};
