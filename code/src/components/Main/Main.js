import React, { useEffect, useState } from "react";
import { MovieList } from "../MovieList/MovieList";
import { Details } from "components/Details/Details";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { API_MovieList, API_POSTERS } from "../../utils/urls";

export const Main = () => {
  const [movieList, setMovieList] = useState([]);
  const [imageInformation, setImageInformation] = useState(null);

  useEffect(() => {
    fetch(API_POSTERS)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.images);
        setImageInformation(data.images);
      });

    fetch(API_MovieList)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        //Rememer to remove =)
        setMovieList(data.results);
      });
  }, []);

  return (
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
      </Switch>
    </BrowserRouter>
  );
};
