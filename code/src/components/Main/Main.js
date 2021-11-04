import React, { useEffect, useState } from "react";
import { MovieList } from "../MovieList/MovieList";
import { Details } from "components/Details/Details";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { API_MovieList, API_POSTERS } from "../../utils/urls";

export const Main = () => {
  const [movieList, setMovieList] = useState([]);
  const [imageInformation, setImageInformation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_POSTERS)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.images);
        setImageInformation(data.images);
        setLoading(false);
      });

    fetch(API_MovieList)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
      });
  }, []);

  return (
    !loading && (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MovieList
                movieList={movieList}
                imageInformation={imageInformation}
              />
            )}
          />
          <Route
            path="/details/:movieId"
            render={() => <Details imageInformation={imageInformation} />}
          />
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
      </BrowserRouter>
    )
  );
};
