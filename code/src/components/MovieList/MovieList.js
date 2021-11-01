import React from "react";
import { MovieListItem } from "./MovieListItem";
import "./MovieList.css";

export const MovieList = ({ movieList, imageInformation }) => {
  return (
    <section className="movie-list-container">
      {movieList.map((movie) => {
        return (
          <MovieListItem
            movie={movie}
            imageInformation={imageInformation}
            key={movie.id}
          />
        );
      })}
    </section>
  );
};
