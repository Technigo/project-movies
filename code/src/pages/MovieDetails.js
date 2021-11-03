import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, MOVIE_DETAILS_URL } from "../urls";

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(MOVIE_DETAILS_URL(API_KEY, movieId))
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [movieId]);

  return (
    <section>
      {details && (
        <div>
          <h1>{details.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`}
            alt={details.title}
          />
          <p>{details.overview}</p>
          <p>{details.vote_average}/10</p>
          <p>Release date: {details.release_date}</p>
        </div>
      )}
    </section>
  );
};
