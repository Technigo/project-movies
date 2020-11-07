import React from "react";
import { Link } from "react-router-dom";

import { API_IMG_URL } from "../urls.js";

export const TvShowThumb = ({ name, id, first_air_date, poster_path }) => {
  const imageURL = `${API_IMG_URL}/w300`;

  return (
    <Link to={`/tv/${id}`} className="tvshow--link">
      <img
        className="tvshow__image"
        src={`${imageURL}${poster_path}`}
        alt={name}
      />
      <div className="tvshow__overlay">
        <div className="tvshow__textbox">
          <h2 className="tvshow__heading">{name}</h2>
          <p className="tvshow__text">First aired: {first_air_date}</p>
        </div>
      </div>
    </Link>
  );
};
