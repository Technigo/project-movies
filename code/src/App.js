import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MoviesList from "components/MoviesList";
import { LIST_URL } from "./utils/urls";


export const App = () => {
  const [movies, setMovies] = useState([]) // we expect to get data from an array, that's why we use []

useEffect(() => {
  fetch(LIST_URL)
    .then((res) => res.json())
    .then((data) => setMovies(data.results)) 
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/">
          <MoviesList 
            films={movies}
            
            
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};




