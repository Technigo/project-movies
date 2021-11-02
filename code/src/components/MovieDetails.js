import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_MOVIE_DETAILS } from "./Links";
import { BackButton } from "./BackButton";
import "./MovieDetails.css";
import { Loader } from "./Loader";
import { Link } from "react-router-dom";
import "../index.css";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(API_MOVIE_DETAILS(movieId))
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something is wrong");
        }
      })
      .then((data) => {
        console.log(data);
        setDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.dir(error);
        setError(error.message);
      });
  }, [movieId, setLoading]);

  return (
    <>
      {loading && (
        <div className="grid">
          <div className="loader-wrapper">
            <Loader color={"goldenrod"} width={120} height={120} />
            <p className="lazy-data-loader">
              Data is lazy today{" "}
              <span role="img" aria-label="smile">
                &#128512;
              </span>
              . Let's wait a little...{" "}
            </p>
          </div>
        </div>
      )}
      {error && (
        <div className="error-container">
          <p className="error-p">
            This is an error page. This happend because of {error}
          </p>
          <Link to="/">
            <button className="go-back-button">To movies</button>
          </Link>
        </div>
      )}
      <section className="movie-wrapper">
        <div className="gradient">
          <img
            className="background-image"
            src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`}
            alt={`still from ${details.title}`}
          />
        </div>
        <div className="movie-details">
          <BackButton />
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w342${details.poster_path}`}
            alt={`poster from ${details.title}`}
          />
          <div className="text-details">
            <div className="title-wrapper">
              <h1>{details.title}</h1>
              <span className="movie-rating">{details.vote_average}</span>
            </div>
            <p>{details.overview}</p>
          </div>
        </div>
      </section>
    </>
  );
};
