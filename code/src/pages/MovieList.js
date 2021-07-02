import React, { useEffect, useState } from "react";

import { MovieListItems } from "../components/MovieListItems";
import { Loading } from "../components/Loading";
import { ErrorPageList } from "./ErrorPageList";

export const MovieList = () => {
  const MOVIES_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=f8d93b3169765fb54ceb97a483ec4821&language=en-US&page=1";
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(MOVIES_URL)
      .then((response) => response.json())
      .then((json) => setMovieList(json.results));
  }, []);

  useEffect(() => {
    if (movieList) {
      setLoading(false);
    }
  }, [movieList, loading]);

  return loading ? (
    <Loading />
  ) : movieList ? (
    <section className="movie-list">
      {movieList.map((movie) => (
        <MovieListItems key={movie.id} {...movie} />
      ))}
    </section>
  ) : (
    <ErrorPageList />
  );
};
