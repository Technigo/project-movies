import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { MOVIE_URL } from "../../api/urls";

import {
  MoviePageContainer,
  DetailsContainer,
  MovieImage,
  MovieTitle,
  MovieRate,
  MovieOverview,
} from "./MovieDetails.style";

const MovieDetails = () => {
  const { id } = useParams();

  const [movieDetails, setMoviesDetails] = useState([]);
  console.log(movieDetails);

  useEffect(() => {
    fetch(MOVIE_URL(id))
      .then((response) => response.json())
      .then((movie) => setMoviesDetails(movie));
  }, [id]);

  // if (movieDetails === undefined) {
  //   return <div>loading...</div>;
  // }

  return (
    <MoviePageContainer image={movieDetails.backdrop_path}>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <DetailsContainer>
        <MovieTitle>{movieDetails.title}</MovieTitle>
        <MovieRate>{movieDetails.vote_average}/10</MovieRate>
        <MovieOverview>{movieDetails.overview}</MovieOverview>
      </DetailsContainer>
    </MoviePageContainer>
  );
};

export default MovieDetails;
