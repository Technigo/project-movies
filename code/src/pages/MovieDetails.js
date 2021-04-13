import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./moviedetails.css";

export const MovieDetails = () => {
  const { movie_id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=d54701f7b694b0188ac7819c5b24df16&language=en-US`
    )
      .then((response) => response.json())
      .then((json) => setMovieDetails(json));
  }, [movie_id]);

  return (
    <>
      <div className="main-wrapper">
        <div
          className="the-background"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), URL(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`,
          }}
          alt={movieDetails.title}
        >
          <Link to="/" className="button-back">
            <span className="arrow-box">&#x2B05; </span>
            <span className="back-link-text"> Movies</span>
          </Link>

          <div className="information">
            <img
              className="info-image"
              src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
            <div className="movie-info">
              <h1 className="movie-details-title">
                {movieDetails.title}
                <span className="rating">{movieDetails.vote_average} /10 </span>
              </h1>
              <p className="overview">{movieDetails.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
