import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MovieList from "./components/MovieList";
import MovieDetails from "./pages/MovieDetails";

const API_key = "5ddb547497cb885965bcba7335e4be9c";
const MOVIES_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}&language=en-US&page=1`;

export const App = () => {

  const [movies, setMovies] = useState([]);

  console.log("Render 1");
  //fetch top rated movies
  useEffect(() => {
    fetch(MOVIES_API)
      .then(response => response.json())
      .then(data => setMovies(data.results));

  }, []);

  console.log("Render 2");

  return (
    <BrowserRouter>
      <Switch>
        {/* if the path = / then render MovieList component */}
        <Route path="/" exact>
          <section className="app-container">
            {movies.map(movie => (
              <MovieList
                key={movie.id}
                {...movie}
              />
            ))}
          </section>
        </Route>
        <Route path="/movies/:slug" exact>
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
