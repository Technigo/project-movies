import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header"
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { BASE_URL } from "./utils/urls";
import NotFound from "./components/NotFound";

export const App = () => {
  const [list, setList] = useState([]);
  const [select, setSelect] = useState('popular')

  useEffect(() => {
    fetch(BASE_URL(select))
      .then((res) => res.json())
      .then((data) => setList(data.results));
  }, [select]);

  console.log(list);

  return (
    <BrowserRouter>
      <Header />  
      <Switch>
        <Route path="/" exact render={() => 
          <MovieList 
            movie={list} 
            select={select}
            setSelect={setSelect}
          />} 
        />
        <Route path="/details/:movieId">
          <MovieDetails/>
        </Route>
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};
