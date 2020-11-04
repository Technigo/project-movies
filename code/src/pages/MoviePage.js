import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MovieDetails } from "./MovieDetails";

export const MoviePage = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5e0af1d18e77dbd12a3e994aa1316cbf&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(json => setMovieDetails(json));
  }, []);

  console.log(movieDetails);

  return <MovieDetails {...movieDetails} />;
};
