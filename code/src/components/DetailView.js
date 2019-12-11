import React, { useState } from "react";

export const DetailView = ({
  title,
  backgroundImage,
  image,
  rating,
  overview
}) => {
  // const [style, setStyle] = useState();

  return (
    <div className="detail">
      <div className="hero-image">
        <img
          src={`https://image.tmdb.org/t/p/w1280/${backgroundImage}`}
          alt={title}
          className="detail_background-img"
        />
      </div>
      {/* <div className="detail_background-img"></div> */}
      <div className="detail-flex">
        <img
          src={`https://image.tmdb.org/t/p/w342/${image}`}
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
