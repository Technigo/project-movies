import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaChevronCircleLeft } from "react-icons/fa";
import { IconContext } from "react-icons";
import { DETAILS_URL } from "utils/urls";
import "./MovieDetails.css";

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

  const backgroundPoster = movieDetails.poster_path
    ? `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
    : "";

  const posterImage = movieDetails.backdrop_path
    ? `https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`
    : "";

  return (
    <div className="details-wrapper">
      <div
        className="background-image"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 100%), url(${backgroundPoster})`,
        }}
      >
        <Link to="/" className="backLink" style={{ textDecoration: "none" }}>
          <div className="button-span">
            <IconContext.Provider
              value={{
                color: "whitesmoke",
                className: "button-chevron",
                verticalAlign: "middle",
              }}
            >
              <div>
                <FaChevronCircleLeft size={20} />
              </div>
            </IconContext.Provider>

            <button>Movies</button>
          </div>
        </Link>
        <div className="info-summary">
          <img
            className="movie-poster"
            src={posterImage}
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
    </div>
  );
};
export default MovieDetails;
