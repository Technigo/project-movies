import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

import "./Details.css";

const Details = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=03e945ac54f666ecb5176aa9f90b8fa0&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          setMovieDetail(data);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setNotFound(true));
  }, [id]);

  const onButtonBackClick = () => {
    history.push("/");
  };

  if (notFound) {
    return <h2>This page does not exist</h2>;
  }

  return (
    <section className="detail-page">
      <div
        className="background-container"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path})`,
        }}
      >
        <button className="back-button" onClick={onButtonBackClick}>
          <span className="back-button-img" role="img" aria-label="back-button">
            ⇦
          </span>
          Movies
        </button>
        <div className="info-container">
          <div className="img-container">
            <img
              className="img"
              src={`https://image.tmdb.org/t/p/w342${movieDetail.poster_path}`}
              alt={movieDetail.title}
            />
          </div>
          <div className="info-text">
            <h1>
              {movieDetail.title}{" "}
              <span className="rating">{movieDetail.vote_average}/10</span>
            </h1>
            <p>{movieDetail.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
