import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import { BackButton } from "components/js/BackButton";

import "components/css/moviebio.css";

export const MovieBio = () => {
  const { id } = useParams();
  const [bio, setBio] = useState({});
  const API_KEY = "88b00ce6c0c72d59de65e4b1fcce3a85";
  const history = useHistory();

  useEffect(() => {
    const URL_MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    fetch(URL_MOVIE_DETAILS)
      .then((response) => response.json())
      .then((json) => {
        setBio(json);
      })
      .catch((error) => {
        console.error("Bad request", error);
      });
  }, [id]);

  return (
    <section className="bio-section">
      <img
        className="background-image"
        src={`https://image.tmdb.org/t/p/original${bio.backdrop_path}`}
        alt={bio.title}
      ></img>
      <Link className="back-button" onClick={() => history.goBack()}>
        <BackButton />All movies
      </Link>
      <div className="content-container">
        <img
          className="poster-image"
          src={`https://image.tmdb.org/t/p/w342${bio.poster_path}`}
          alt={bio.title}
        ></img>
        <div className="text-container">
          <h1>
            {bio.title}
            <span className="rating">{bio.vote_average}/10</span>
          </h1>
          <p className="movie-description">{bio.overview}</p>
        </div>
      </div>
    </section>
  );
};
