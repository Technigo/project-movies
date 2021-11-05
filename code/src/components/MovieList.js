import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

import MoviePoster from "./MoviePoster";
import Details from "./Details";
import Error from "./Error";
import Selector from "./Selector";

const MovieList = ({
  movies,
  makePosterUrl,
  apiKey,
  makeApiUrl,
  setApiUrl,
}) => {
  return (
    <BrowserRouter>
      <Switch>
        {/* This is the root page aka homepage which displays two components */}
        <Route exact path="/">
          <Selector makeApiUrl={makeApiUrl} setApiUrl={setApiUrl} />
          <div className="movie-list-wrapper">
            {/* We are mapping over an array that holds 20 movies returned by the api and display each as a poster */}
            {movies.map((movie) => {
              return (
                <div key={movie.id} className="single-poster-wrapper">
                  <Link to={`/movies/${movie.id}`}>
                    <MoviePoster
                      title={movie.title}
                      poster_url={makePosterUrl(movie.poster_path)}
                      release={movie.release_date}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </Route>
        {/* This page displays info about a single movie, holds background picture, synopsis, poster, rating */}
        <Route exact path="/movies/:id">
          <Details makePosterUrl={makePosterUrl} apiKey={apiKey} />
        </Route>
        {/* This route leads to a page not found */}
        <Route exact path="/404">
          <Error />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default MovieList;
