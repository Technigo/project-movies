import React from "react";

export const DetailView = ({
  title,
  backgroundImage,
  image,
  rating,
  overview
}) => {
  return (
    <div className="detail">
      <img
        src={`https://image.tmdb.org/t/p/w1280/${backgroundImage}`}
        alt={title}
        className="detail_background-img"
      />
      <div className="detail-flex">
        <img
          src={`https://image.tmdb.org/t/p/w1280/${image}`}
          alt={title}
          className="detail_image"
        />
        <div id="detail-title">
          <h2>{title}</h2>
          <p>{rating} </p>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};
