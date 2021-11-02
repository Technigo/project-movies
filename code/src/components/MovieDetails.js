import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DETAILS_URL } from "utils/urls";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((json) => {
        setMovieDetails(json);
        console.log("DETAILS", json);
      });
  }, [movieId]);

  return (
    <section>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`,
        }}
      >
        <button>Movies</button>
        <div className="info-summary">
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
            alt="{movieDetails.title} poster"
          ></img>
          <div className="summary-wrapper">
            <div className="name-rate">
              <h3 className="info-details">{movieDetails.title}</h3>
              <p className="votes">{movieDetails.vote_average}/10</p>
            </div>
            <p className="info-details">{movieDetails.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MovieDetails;
