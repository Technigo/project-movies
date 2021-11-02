import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaChevronCircleLeft } from "react-icons/fa";

import { DETAILS_URL } from "utils/urls";
import Errors from "Components/Error/Errors";
import "./Details.css";

const Details = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          setErrors(true);
        } else {
          setMovieDetail(data);
          console.log(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  console.log(movieDetail);

  return (
    <>
      {errors && <Errors />}
      <div
        className="background-img"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0) 100%), url(
        https://image.tmdb.org/t/p/w1280/${movieDetail.backdrop_path})`,
        }}
      >
        <Link className="back-arrow" to="/">
          <FaChevronCircleLeft />
          Movies
        </Link>
        {console.log(movieDetail.backdrop_path)}
        <article className="movie-card-details">
          <img
            src={`https://image.tmdb.org/t/p/w342/${movieDetail.poster_path}`}
            alt={movieDetail.title}
            className="movie-image-small"
          />
          <div className="movie-details">
            <h1>
              {movieDetail.title}
              <span className="ranking">{movieDetail.vote_average}/10</span>
            </h1>
            <p>{movieDetail.overview}</p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Details;
