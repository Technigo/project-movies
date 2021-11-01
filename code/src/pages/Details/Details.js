import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { DETAILS_URL } from "utils/urls";
import "./Details.css";

const Details = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));
  }, [movieId]);

  console.log(movieDetail);
  return (
    <div
      className="background-img"
      style={{
        backgroundImage: `url(
          https://image.tmdb.org/t/p/w1280/${movieDetail.backdrop_path})`,
      }}
    >
      {console.log(movieDetail.backdrop_path)}
      <article className="movie-card-details">
        <img
          src={`https://image.tmdb.org/t/p/w342/${movieDetail.poster_path}`}
          alt={movieDetail.title}
        />
        <div className="movie-details">
          <h1>
            {movieDetail.title}
            <span className="ranking">{movieDetail.vote_average}</span>
          </h1>
          <p>{movieDetail.overview}</p>
        </div>
      </article>
    </div>
  );
};

export default Details;
