import React from "react";
import { Link } from "react-router-dom";

export const DetailView = ({
  title,
  backgroundImage,
  image,
  rating,
  overview
}) => {
  return (
    <div className="detail">
      <div className="hero-image">
        <img
          src={`https://image.tmdb.org/t/p/w1280/${backgroundImage}`}
          alt={title}
          className="detail_background-img"
        />
      </div>

      <div className="detail-flex">
        <div className="image">
          <Link to="/" className="button">
            <ion-icon name="arrow-dropleft-circle"></ion-icon>
            <p>Movies</p>
          </Link>
          <img
            src={`https://image.tmdb.org/t/p/w342/${image}`}
            alt={title}
            className="detail_image"
          />
        </div>
        <div id="detail-description">
          <div className="detail-title">
            <h2>{title}</h2>
            <p className="rating">{rating}/10</p>
          </div>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};
