import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { MOVIE_URL } from "../../api/urls";

import {
  BackButton,
  MoviePageContainer,
  DetailsContainer,
  MovieImage,
  MovieTitle,
  MovieRate,
  MovieOverview,
  Details,
} from "./MovieDetails.style";

const MovieDetails = () => {
  const { id } = useParams();

  const [movieDetails, setMoviesDetails] = useState([]);

  useEffect(() => {
    fetch(MOVIE_URL(id))
      .then((response) => response.json())
      .then((movie) => setMoviesDetails(movie));
  }, [id]);

  if (movieDetails.length === 0) {
    return <></>;
  }
  return (
    <MoviePageContainer image={movieDetails.backdrop_path}>
      <BackButton to={"/"}>Movies</BackButton>
      <Details>
        <MovieImage
          src={`https://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
        <DetailsContainer>
          <MovieTitle>{movieDetails.title}</MovieTitle>
          <MovieRate>{movieDetails.vote_average}/10</MovieRate>
          <MovieOverview>{movieDetails.overview}</MovieOverview>
        </DetailsContainer>
      </Details>
    </MoviePageContainer>
  );
};

export default MovieDetails;
