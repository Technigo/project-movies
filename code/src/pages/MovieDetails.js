import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API_KEY, MOVIE_DETAILS_URL } from "../urls";
import "./MovieDetails.css";

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

  // The code below displays the button, background img, poster img and info about the movie

  return (
    <section>
      {/* Solving 404 (Not Found)" error for img: https://stackoverflow.com/questions/68119674/get-http-image-tmdb-org-t-p-w300undefined-404-not-found-in-react */}
      {details.backdrop_path && (
        <div
          className="details-container"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/original${details.backdrop_path})`,
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
