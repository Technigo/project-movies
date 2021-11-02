import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import MoviePoster from "./MoviePoster";
import Details from "./Details";

const MovieList = ({ movies, makePosterUrl }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div>
            {movies.map((movie) => {
              return (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                  <MoviePoster
                    title={movie.title}
                    poster_url={makePosterUrl(movie.poster_path)}
                    release={movie.release_date}
                  />
                </Link>
              );
            })}
          </div>
        </Route>
        <Route exact path="/movies/:id">
          <Details />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default MovieList;
