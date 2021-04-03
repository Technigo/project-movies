import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const MovieDetail = () => {
  const { movieId } = useParams();
  let DETAIL_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=f8d93b3169765fb54ceb97a483ec4821&language=en-US`;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(DETAIL_URL)
      .then((response) => response.json())
      .then((json) => setMovie(json));
  }, [DETAIL_URL]);

  if (movie === undefined) {
    return <></>;
  }

  return (
    <article className="detailPage">
      <Link className="back-link" to="/">
        <i className="fas fa-chevron-circle-left"></i>
        Back
      </Link>
      <div
        className="background"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        }}
      >
        <div className="summary">
          <img
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt="{movie.title}"
          />
          <div className="details-page-details">
            <h1>
              {movie.title}
              <span className="rating">{movie.vote_average}/10</span>
            </h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
