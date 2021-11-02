import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ allMovies }) => {
  const { movieId } = useParams();
  const matchingMovie = allMovies.find((movie) => movie.id == movieId);

  return (
    <div>
      <h1>{matchingMovie.title}</h1>
      <p>{matchingMovie.overview}</p>
    </div>
  );
};

export default MovieDetails;
