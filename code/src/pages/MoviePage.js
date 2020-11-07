import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import { MovieDetails } from "./MovieDetails";
import { BackButton } from "../components/BackButton";

export const MoviePage = () => {
  const { id } = useParams();
  const history = useHistory();

  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5e0af1d18e77dbd12a3e994aa1316cbf&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(json => {
        setMovieDetails(json);
        console.log(json);
      });
  }, [id]);

  console.log("movie details", movieDetails);
  if (movieDetails.id) {
    return <MovieDetails {...movieDetails} />;
  }
  return (
    <main className="movie-error-message">
      <h2>Sorry, we could not find that movie - Please try again</h2>
      <BackButton className="movies-back-button" history={history} />
    </main>
  );
};
