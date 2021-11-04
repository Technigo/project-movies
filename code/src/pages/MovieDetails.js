import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API_KEY, MOVIE_DETAILS_URL } from "../urls";
import "../index.css";

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [details, setDetails] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetch(MOVIE_DETAILS_URL(API_KEY, movieId))
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [movieId]);

  const goBackButton = () => {
    history.goBack();
  };

  return (
    <section>
      {details && (
        <div
          className="details-container"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${details.backdrop_path})`,
          }}
        >
          <button className="go-back-button" onClick={goBackButton}>
            <span>Movies</span>
          </button>
          <div className="movie-details-summary">
            <img
              className="movie-details-poster"
              src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`}
              alt={details.title}
            />
            <div className="movie-details-text">
              <h1>
                {details.title}
                <span className="vote-average">{details.vote_average}/10</span>
              </h1>
              <p>{details.overview}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
