import React from "react";
import { MovieListItem } from "./MovieListItem";
import styled from "styled-components";

// -------------------css---------------------------

const MovieListContainer = styled.div`
  display: grid;
  flex-wrap: center;
  grid-template-columns: repeat(2, auto);
  row-gap: 10px;

  @media (min-width: 668px) and (max-width: 1024px) {
    justify-content: space-evenly;
  }
  @media only screen and (min-width: 1025px) {
    justify-content: space-evenly;
    grid-template-columns: repeat(4, auto);
  }
`;

export const MovieList = ({ movieList, imageInformation }) => {
  return (
    <MovieListContainer>
      {movieList.map((movie) => {
        return (
          <MovieListItem
            movie={movie}
            imageInformation={imageInformation}
            key={movie.id}
          />
        );
      })}
    </MovieListContainer>
  );
};
