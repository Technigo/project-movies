
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import Header from "./components/Header"
import { MOVIES_URL } from "./utils/urls";




export const App = () => {
  const [moviesList, setMoviesList] = useState([]);
  

  useEffect(() => {
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then((data) => setMoviesList(data.results));
  }, []);

  console.log("data", moviesList);

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route
            exact path="/"render={() => <MovieList movies={moviesList} />}
          ></Route>

          <Route path="movies/:movieId" component={MovieDetails}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};











