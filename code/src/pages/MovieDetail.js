import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

import "./movieDetail.css";
import Loading from "../components/Loading";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({});
  const [status, setStatus] = useState(200);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const API_KEY = "f7e0c4070f4665dbae6d58fba626cfe4";
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const URL_CREDITS = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;

  const punctuation = (index, length) => {
    if (index === length - 1) return "";
    if (index === length - 2) return " & ";

    return ", ";
  };

  useEffect(() => {
    Promise.all([fetch(URL), fetch(URL_CREDITS)])
      .then((res) => {
        return Promise.all(
          res.map((res) => {
            setStatus(res.status);
            return res.json();
          })
        );
      })
      .then((json) => {
        setMovie(json[0]);
        setCredits(json[1]);
        setTimeout(() => {
          setLoading(false);
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
  console.log("Credits", credits);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="movie-details-container"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%),
            url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
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
              <div>
                <h1>
                  {movie.title}
                  <span className="movie-detial-rating">
                    {movie.vote_average}/10
                  </span>
                </h1>
                <p className="credits-name">
                  {credits.cast.slice(0, 5).map((actor, index) => (
                    <>
                      <Link to={`/person/${actor.id}`}>{actor.name}</Link>
                      <span>{punctuation(index, 5)}</span>
                    </>
                  ))}
                </p>
              </div>
              <p className="movie-overview">{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
