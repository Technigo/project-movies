import React from "react";
import { Link } from "react-router-dom";

import { API_IMG_URL } from "../urls";

export const TVShowThumb = ({ name, id, first_air_date, poster_path }) => {
  const imageURL = `${API_IMG_URL}/w300/`;

  return (
    <Link to={`/tv/${id}`}>
      <section className="tvshow__container">
        <div className="tvshow">
          <img
            className="tvshow__image"
            src={`${imageURL}${poster_path}`}
            alt={name}
          />
          <div className="tvshow__textbox">
            <h4 className="tvshow__name">{name}</h4>
            <p className="tvshow__text">First aired: {first_air_date}</p>
          </div>
        </div>
      </section>
    </Link>
  );
};
