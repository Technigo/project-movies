import React, { useEffect, useState, Redirect } from "react";
import { useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

import "./movieDetail.css";
import Loading from "../components/Loading";
import NotFound from "./NotFound";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(200);
  const [loading, SetLoading] = useState(true);

  const history = useHistory();

  const API_KEY = "f7e0c4070f4665dbae6d58fba626cfe4";
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

  // console.log("API:", URL);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        console.log(res.status);
        setStatus(res.status);
        return res.json();
      })
      .then((json) => {
        setMovie(json);
        setTimeout(() => {
          SetLoading(false);
        }, 500);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [movieId, URL]);

  if (status === 404) {
    console.log("Status 404");
    history.push("/404");
  }

  console.log("Movie", movie);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="movie-details-container"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path}) `,
          }}
        >
          <button
            type="button"
            className="back-to-movies"
            onClick={() => history.goBack()}
          >
            <span>&#10094; </span>
            <span className="back">Movies</span>
          </button>
          <div className="summery">
            <img
              src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-details">
              <h1>
                {movie.title}
                <span className="movie-detial-rating">
                  {movie.vote_average}/10
                </span>
              </h1>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
