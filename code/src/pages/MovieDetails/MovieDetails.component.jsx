import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { MOVIE_URL } from "../../api/urls";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMoviesDetails] = useState([]);

  useEffect(() => {
    fetch(MOVIE_URL(id))
      .then((response) => response.json())
      .then((movie) => setMoviesDetails(movie));
  }, [id]);

  return <section>{movieDetails.title}</section>;
};

export default MovieDetails;
