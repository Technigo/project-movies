import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { MOVIE_URL } from "../../api/urls";

import { MoviePageContainer } from "./MovieDetails.style";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMoviesDetails] = useState([]);
  console.log(movieDetails);
  useEffect(() => {
    fetch(MOVIE_URL(id))
      .then((response) => response.json())
      .then((movie) => setMoviesDetails(movie));
  }, [id]);

  return (
    <MoviePageContainer image={movieDetails.backdrop_path}>
      {movieDetails.title}
    </MoviePageContainer>
  );
};

export default MovieDetails;
