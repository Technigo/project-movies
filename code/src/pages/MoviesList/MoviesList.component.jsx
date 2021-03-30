import React, { useState, useEffect } from "react";

import { API_URL } from "../../api/urls";

import MovieItem from "../../components/MovieItem/MovieItem.component";

import { MovieListContainer } from "./MoviesList.style";

const MoviesList = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setMoviesList(json.results));
  }, []);

  console.log(moviesList);

  return (
    <MovieListContainer>
      {moviesList.map((movie) => {
        return <MovieItem {...movie} key={movie.id} />;
      })}
    </MovieListContainer>
  );
};

export default MoviesList;
