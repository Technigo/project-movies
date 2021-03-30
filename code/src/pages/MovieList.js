import React, { useEffect, useState } from "react";

import { MovieThumb } from "../components/MovieThumb";
import Grid from "@material-ui/core/Grid";

export const MovieList = () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=180969109de0f1c45ba2c80ba35bd8c7&language=en-US&page=1";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
      });
  }, []);

  console.log(movies);

  return (
    <Grid container justifiy="center">
      {movies.map((movie) => (
        <MovieThumb {...movie} />
      ))}
    </Grid>
  );
};
