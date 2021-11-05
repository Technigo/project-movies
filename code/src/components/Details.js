import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "components/details.css";
import styled from "styled-components";

const BackLink = styled.div`
  position: absolute;
  left: 80px;
  top: 50px;
  opacity: 0.6;

  a {
    text-decoration: none;
    font-weight: 700;
    color: #fff;
  }
  &:hover {
    opacity: 1;
  }
`;

const Details = () => {
  const [details, setDetails] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a89f6720304b78135ad37cee571cef4e&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => setDetails(res));
  }, [id]);

  return (
    <section className="details-backdrop">
      <BackLink>
        <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path
              d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z"
              fill="#fff"
              fillRule="evenodd"
            ></path>
          </svg>
          Movies
        </a>{" "}
      </BackLink>

      <div className="backdrop-container">
        <img
          className="backdrop-image"
          src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`}
          alt={id.title}
        />
      </div>
      <div className="movie-details-container">
        <div className="movie-detail-info">
          <img
            className="poster-img"
            src={`https://image.tmdb.org/t/p/w400${details.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="details-child">
          <div className="title-rating-container">
            <h2 className="movie-title">{details.original_title}</h2>
            <p className="rating-text">{details.vote_average}/10</p>
          </div>
          <p>{details.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
