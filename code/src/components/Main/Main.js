import React, { useEffect, useState } from "react";
import { MovieList } from "../MovieList/MovieList";
import { Details } from "components/Details/Details";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { API_MovieList, API_POSTERS } from "../../utils/urls";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

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
        setTimeout(() => setLoading(false), 500);
      });

    fetch(API_MovieList)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
      });
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) {
    return (
      <SpinnerContainer>
        <ClipLoader color={"white"} loading={true} size={150} />
      </SpinnerContainer>
    );
  }

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
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </Switch>
    </BrowserRouter>
  );
};

const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
